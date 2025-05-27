"use client";

import { usePathname } from "next/navigation";
import Navbar from "./main/Navbar";
import Footer from "./main/Footer";
import StarsCanvas from "./main/StarBackground";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // List of routes where you don't want to show the layout elements
  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <>
      {!isAuthPage && <StarsCanvas />}
      {!isAuthPage && <Navbar />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
}
