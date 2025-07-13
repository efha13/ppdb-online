// components/Header.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const menu = [
  { label: "Beranda", href: "/" },
  { label: "FAQ", href: "/faq" },
  { label: "Hubungi Kami", href: "/hubungi-kami" },
];

const akunMenu = [
  { label: "Buat Akun", href: "/buat-akun" },
  { label: "Login", href: "/login" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold tracking-tight hover:opacity-80">
          🎓 Pendaftaran
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
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

          {/* Dropdown menu akun */}
          <div className="relative group">
            <button className="hover:underline">Akun ▾</button>
            <div className="absolute hidden group-hover:block bg-white text-blue-600 mt-2 rounded shadow-lg min-w-[120px] py-2 z-10">
              {akunMenu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-1 hover:underline ${
                pathname === item.href ? "font-bold underline" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="border-t pt-2">
            {akunMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-1 hover:underline"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
