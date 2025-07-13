// Should I move this file to ..\pages\api ? NO.

// Client component
// "use client";

// import { SessionProvider } from "next-auth/react";

// export default function Providers({ children }: { children: React.ReactNode }) {
//   return <SessionProvider>{children}</SessionProvider>;
// }


// Add 4 static pages
// File: app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pendaftaran Online",
  description: "Website pendaftaran dengan desain minimalis.",
};

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="id">
//       <body className={`${inter.className} bg-blue-50 text-blue-900 min-h-screen p-6`}>{children}</body>
//     </html>
//   );
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-blue-50 text-blue-900 min-h-screen p-6`}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}