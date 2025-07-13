// Server-side session management
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// export default async function Dashboard() {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     return <div>Please sign in to access the dashboard.</div>;
//   }

//   return <div>Welcome, {session.user?.name}!</div>;
// }

import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div>Please sign in to access the dashboard.</div>;
  }

  return <div>Welcome, {session.user?.name}!</div>;
}