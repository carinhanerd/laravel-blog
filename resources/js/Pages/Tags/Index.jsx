import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/inertia-react";
import SadEmoji from "@/Components/Emojis/SadEmoji";
import PlusEmoji from "@/Components/Emojis/PlusEmoji";

export default function Index({ tags }) {
  return (
    <AdminLayout header="List of Tags">
      <div className="flex items-center">
        <Link
          href={route("tags.create")}
          className="flex items-center p-3 mb-4 text-white bg-gray-800 rounded"
        >
          <PlusEmoji />
          New Tag
        </Link>
      </div>

      {tags.length > 0 ? (
        <table className="w-full border divide-y">
          <thead className="bg-white">
            <tr>
              <th scope="col" className="p-2 text-left">
                #
              </th>
              <th scope="col" className="p-2 text-left">
                name
              </th>
              <th scope="col" className="p-2 text-left">
                articles
              </th>
              <th scope="col" className="p-2 text-left">
                actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {tags.map((tag, idx) => (
              <tr key={idx}>
                <td className="px-2 py-4 text-gray-600">{idx + 1}</td>
                <td className="px-2 py-4 text-gray-600">{tag.name}</td>
                <td className="px-2 py-4 text-gray-600">
                  {tag.articles_count}
                </td>
                <td className="flex items-center gap-1 px-2 py-4">
                  <Link
                    href={route("tags.edit", tag)}
                    className="p-2 text-white bg-gray-800 rounded"
                  >
                    Edit
                  </Link>
                  <Link
                    as="button"
                    method="delete"
                    href={route("tags.destroy", tag)}
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
          <p className="font-semibold">No tags found.</p>
        </div>
      )}
    </AdminLayout>
  );
}
