// File: app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50 text-blue-900 px-4 text-center">
      <img
        src="shutterstock-2299376241.jpg"
        alt="Halaman tidak ditemukan"
        className="w-64 mb-6 rounded-xl shadow-md"
      />
      <h1 className="text-4xl font-bold mb-2">404 - Halaman Tidak Ditemukan</h1>
      <p className="mb-4 text-lg">Maaf, halaman yang Anda cari tidak tersedia.</p>
      <Link
        href="/"
        className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}