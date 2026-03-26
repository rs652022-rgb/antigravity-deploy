"use client";

import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./Footer").then((mod) => mod.Footer), {
  ssr: true,
});

export function FooterWrapper() {
  return <Footer />;
}
