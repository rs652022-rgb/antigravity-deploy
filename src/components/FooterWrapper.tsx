"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const Footer = dynamic(() => import("./Footer").then((mod) => mod.Footer), {
  ssr: true,
});

export function FooterWrapper() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <Footer />;
}
