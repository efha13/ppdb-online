// File: app/faq/page.tsx
export default function FAQ() {
  return (
    <main className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Pertanyaan yang Sering Diajukan (FAQ)</h1>
      <div className="space-y-4">
        <div>
          <h2 className="font-bold">Q: Apakah pendaftaran gratis?</h2>
          <p>A: Ya, tidak dikenakan biaya apa pun.</p>
        </div>
        <div>
          <h2 className="font-bold">Q: Bagaimana saya tahu jika saya diterima?</h2>
          <p>A: Anda akan menerima email konfirmasi jika diterima.</p>
        </div>
      </div>
    </main>
  );
}