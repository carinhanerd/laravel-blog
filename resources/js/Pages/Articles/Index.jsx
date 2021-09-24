import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/inertia-react";
import SadEmoji from "@/Components/Emojis/SadEmoji";
import PlusEmoji from "@/Components/Emojis/PlusEmoji";

export default function Index({ articles }) {
  return (
    <AdminLayout header="List Articles">
      <div className="flex items-center">
        <Link
          href={route("articles.create")}
          className="flex items-center p-3 mb-4 text-white bg-gray-800 rounded"
        >
          <PlusEmoji />
          New Article
        </Link>
      </div>

      {articles.length > 0 ? (
        <table className="w-full border divide-y">
          <thead className="bg-white">
            <tr>
              <th scope="col" className="p-2 text-left">
                #
              </th>
              <th scope="col" className="p-2 text-left">
                title
              </th>
              <th scope="col" className="p-2 text-left">
                created_at
              </th>
              <th scope="col" className="p-2 text-left">
                actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {articles.map((article, idx) => (
              <tr key={idx}>
                <td className="px-2 py-4 text-gray-600">{idx + 1}</td>
                <td className="px-2 py-4 text-gray-600">{article.title}</td>
                <td className="px-2 py-4 text-gray-600">
                  {article.created_at}
                </td>
                <td className="flex items-center gap-1 px-2 py-4">
                  <Link
                    href={route("articles.show", article)}
                    className="p-2 text-white bg-blue-700 rounded"
                  >
                    Show
                  </Link>

                  <Link
                    href={route("articles.edit", article)}
                    className="p-2 text-white bg-gray-800 rounded"
                  >
                    Edit
                  </Link>

                  <Link
                    as="button"
                    method="delete"
                    href={route("articles.destroy", article)}
                    className="p-2 text-white bg-red-600 rounded"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex flex-col items-center mt-4">
          <SadEmoji />
          <p className="font-semibold">No articles found.</p>
        </div>
      )}
    </AdminLayout>
  );
}
