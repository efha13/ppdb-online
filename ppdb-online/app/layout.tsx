// Should I move this file to ..\pages\api ?

// Client component
"use client";

import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

// Server-side session management
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div>Please sign in to access the dashboard.</div>;
  }

  return <div>Welcome, {session.user?.name}!</div>;
}
