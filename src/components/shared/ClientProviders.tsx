"use client";

import { type ReactNode } from "react";
import { ThemeProvider } from "@/context/ThemeContext";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
