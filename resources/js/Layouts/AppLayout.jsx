import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function AppLayout({ children }) {
  return (
    <div className="container mx-auto">
      <header className="flex items-center justify-center py-5 mb-4 border-b border-gray-200">
        <Link
          href={route("home")}
          className="px-4 font-sans text-2xl font-semibold border-r border-gray-300"
        >
          Laravel Blog!
        </Link>

        <nav className="flex items-center gap-4 ml-4">
          <Link href={route("home")}>Home</Link>
          <Link href={route("about")}>About me</Link>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}
