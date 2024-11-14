// src/app/SessionLayout.tsx
"use client"; // Mark this as a client component

import { SessionProvider } from "next-auth/react";

export default function SessionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
