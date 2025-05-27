import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import { authOptions } from "@/lib/authoption";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/register");
  }

  return (
    <main className="h-full w-full text-white">
      <div className="text-2xl">Welcome Home, {session.user?.name}!</div>
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
