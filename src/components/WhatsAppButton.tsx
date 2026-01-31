"use client";

import { FaWhatsapp } from "react-icons/fa";
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
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20b858] rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 group outline-none"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8 text-white" />
          <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
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
