import { Outlet } from "react-router-dom";
import DocumentMeta from "@/components/DocumentMeta.jsx";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <DocumentMeta />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
