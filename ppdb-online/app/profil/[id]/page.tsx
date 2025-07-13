// app/profil/[id]/page.tsx
import { useParams } from "next/navigation";

export default function ProfilAkun() {
  const params = useParams();
  const id = params?.id;

  return (
    <main className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow text-blue-900">
      <h1 className="text-2xl font-bold mb-4 text-center">Profil Akun</h1>
      <p className="mb-2">ID Akun: <span className="font-mono">{id}</span></p>
      <p>Informasi pengguna akan ditampilkan di sini.</p>
    </main>
  );
}
