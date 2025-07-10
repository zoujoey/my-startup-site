import "./globals.css";
import NavLink from "@/components/NavLink"; // ✅ Default import
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata = {
  title: "My Startup Site",
  description: "Barebones Next.js App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold hover:underline">
            🚀 MySite
          </Link>
          <div className="flex gap-6">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About" />
            <NavLink href="/projects" label="Projects" />
            <NavLink href="/news" label="Media" />  
            <NavLink href="/contact" label="Contact" /> 
          </div>
        </nav>
        <main className="p-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

