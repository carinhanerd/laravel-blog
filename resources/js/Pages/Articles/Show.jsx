import React from "react";
import AppLayout from "@/Layouts/AppLayout";

export default function Show({ article }) {
  return (
    <AppLayout>
      <article>
        <div className="flex flex-col items-end w-2/3 px-6 mx-auto">
          <h1 className="text-5xl font-semibold leading-tight text-right">
            {article.title}
          </h1>

          <h2 className="leading-normal text-gray-500">
            Published on {article.created_at}
          </h2>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              {article.tags &&
                article.tags.map((tag) => (
                  <div
                    key={tag.id}
                    className="px-3 py-2 text-sm font-semibold text-white bg-blue-400 rounded"
                  >
                    {tag.name}
                  </div>
                ))}
            </div>

            {article.category && (
              <div className="px-3 py-2 font-semibold text-white bg-gray-800 rounded">
                {article.category.name}
              </div>
            )}
          </div>
        </div>

        <div className="w-2/3 mx-auto my-8">
          <pre className="whitespace-pre-wrap">
            <p className="text-lg">{article.body}</p>
          </pre>
        </div>
      </article>
    </AppLayout>
  );
}
