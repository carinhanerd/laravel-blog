import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function ColorfulLink({ children, href, active }) {
  return (
    <Link
      href={href}
      className={
        active
          ? "flex p-4 text-white rounded bg-gradient-to-r from-green-400 to-blue-500"
          : "flex p-4 text-white rounded bg-gray-800"
      }
    >
      {children}
    </Link>
  );
}
