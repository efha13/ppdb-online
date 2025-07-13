// app/login/page.tsx
export default function Login() {
  return (
    <main className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow text-blue-900">
      <h1 className="text-2xl font-bold mb-4 text-center">Masuk</h1>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full border px-3 py-2 rounded" />
        <input type="password" placeholder="Password" className="w-full border px-3 py-2 rounded" />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </main>
  );
}
