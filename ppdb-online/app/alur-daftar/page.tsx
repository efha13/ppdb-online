// File: app/alur-daftar/page.tsx
export default function AlurDaftar() {
  return (
    <main className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Alur Pendaftaran</h1>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Isi formulir pendaftaran online</li>
        <li>Unggah dokumen yang diminta</li>
        <li>Tunggu verifikasi dari admin</li>
        <li>Terima konfirmasi melalui email</li>
      </ol>
    </main>
  );
}