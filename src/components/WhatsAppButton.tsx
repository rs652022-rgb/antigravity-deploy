"use client";

import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function WhatsAppButton() {
  const phoneNumber = "+918826936399";

  const handleSelect = (message: string) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const templates = [
    {
      label: "Job Seeker",
      message:
        "Hi, I am a job seeker and would like you to kindly review my profile. Please let me know the next steps. Thank you.",
    },
    {
      label: "Business Services Inquiry",
      message:
        "Hello, we are looking for business services for our company. Please share details on how we can proceed. Thank you.",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center w-12 h-12 bg-black/60 hover:bg-black/85 border border-white/10 hover:border-white/20 backdrop-blur-md rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 group outline-none cursor-pointer"
          aria-label="Contact us on WhatsApp"
        >
          <Image
            src="/whatsapp-logo.png"
            alt="WhatsApp Chat"
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
            priority
          />
          <span className="absolute right-full mr-3 bg-black/85 border border-white/10 text-white px-3 py-1.5 rounded-lg text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl pointer-events-none">
            Chat with us
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="top" className="mb-2 w-64 p-2">
        {templates.map((template, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => handleSelect(template.message)}
            className="cursor-pointer py-3 focus:bg-gray-100"
          >
            {template.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
