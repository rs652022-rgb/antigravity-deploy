"use client";

import { useEffect } from "react";

export function HomeBodyClass() {
  useEffect(() => {
    document.body.classList.add("home-page-active");
    return () => {
      document.body.classList.remove("home-page-active");
    };
  }, []);
  return null;
}
