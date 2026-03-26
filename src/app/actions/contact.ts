"use server";

import { Resend } from "resend";
import { z } from "zod";

export async function sendContactEmail(formData: FormData) {
  const rawData = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone") || "",
    companyName: formData.get("companyName") || "",
    service: formData.get("service"),
    message: formData.get("message"),
  };

  // Basic validation schema
  const schema = z.object({
    fullName: z.string().min(1, "Full Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    companyName: z.string().optional(),
    service: z.string().min(1, "Service is required"),
    message: z.string().min(1, "Message is required"),
  });

  const validatedFields = schema.safeParse(rawData);

  if (!validatedFields.success) {
    return { success: false, error: validatedFields.error.issues[0].message };
  }

  const { fullName, email, phone, companyName, service, message } = validatedFields.data;
  const file = formData.get("attachment") as File | null;

  // Server-side file size check (10MB)
  if (file && file.size > 10 * 1024 * 1024) {
    return { success: false, error: "File size exceeds 10MB limit." };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return { success: false, error: "Email service is not configured. Please contact the administrator." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    let attachments = [];

    if (file && file.size > 0) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    const { data, error } = await resend.emails.send({
      from: "AdmirerX Contact <onboarding@resend.dev>",
      to: ["management@admirerx.net"],
      subject: `New Contact Form Submission: ${fullName}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #000; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Contact Request</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Company:</strong> ${companyName || "Not provided"}</p>
          <p><strong>Service:</strong> ${service}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          ${file ? `<p style="margin-top: 20px; font-size: 12px; color: #666;">Note: An attachment (${file.name}) is included with this email.</p>` : ""}
        </div>
      `,
      attachments: attachments,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error("Server Action Error:", err);
    return { success: false, error: err.message || "Failed to send email" };
  }
}
