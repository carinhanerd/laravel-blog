import React from "react";
import { Link } from "@inertiajs/inertia-react";
import ColorfulLink from "@/Components/ColorfulLink";

export default function AdminLayout({ children, header }) {
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
          <Link as="button" method="post" href={route("logout")}>
            Log out
          </Link>
        </nav>
      </header>

      <div className="flex gap-6">
        <aside>
          <nav className="sticky top-0 flex flex-col gap-4 pt-4 w-60">
            <ColorfulLink
              href={route("admin")}
              active={route().current("admin")}
            >
              Admin Panel
            </ColorfulLink>

            <ColorfulLink
              href={route("articles.index")}
              active={
                route().current("articles.index") ||
                route().current("articles.create") ||
                route().current("articles.edit")
              }
            >
              Articles
            </ColorfulLink>

            <ColorfulLink
              href={route("categories.index")}
              active={
                route().current("categories.index") ||
                route().current("categories.create") ||
                route().current("categories.edit")
              }
            >
              Categories
            </ColorfulLink>

            <ColorfulLink
              href={route("tags.index")}
              active={
                route().current("tags.index") ||
                route().current("tags.create") ||
                route().current("tags.edit")
              }
            >
              Tags
            </ColorfulLink>
          </nav>
        </aside>

        <main className="w-full px-6 pb-4 border-l border-gray-200">
          <h1 className="mb-4 text-4xl">{header}</h1>

          {children}
        </main>
      </div>
    </div>
  );
}
