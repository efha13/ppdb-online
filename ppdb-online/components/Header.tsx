// components/Header.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { label: "Beranda", href: "/" },
  { label: "Buat Akun", href: "/buat-akun" },
  { label: "Login", href: "/login" },
  { label: "FAQ", href: "/faq" },
  { label: "Hubungi Kami", href: "/hubungi-kami" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-blue-600 text-white py-4 shadow">
      <nav className="max-w-5xl mx-auto flex items-center justify-center gap-6 text-sm font-medium">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`hover:underline ${
              pathname === item.href ? "font-bold underline" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
