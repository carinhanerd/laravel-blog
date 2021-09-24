import { Link } from "@inertiajs/inertia-react";
import React from "react";

function GoBack({ to }) {
  return (
    <Link href={to} className="flex items-center text-sm font-semibold">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11 17l-5-5m0 0l5-5m-5 5h12"
        />
      </svg>
      Go back
    </Link>
  );
}

export default GoBack;
