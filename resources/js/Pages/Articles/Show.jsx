import React from "react";
import AppLayout from "@/Layouts/AppLayout";

export default function Show({ article }) {
  return (
    <AppLayout>
      <article>
        <div className="flex flex-col items-end w-2/3 px-6 mx-auto mb-8">
          <h1 className="text-5xl font-semibold leading-tight text-right">
            {article.title}
          </h1>

          <h2 className="leading-normal text-gray-500">
            Published on {article.created_at}
          </h2>

          {article.category && (
            <div className="px-3 py-2 mt-4 font-semibold text-white bg-gray-800 rounded">
              {article.category.name}
            </div>
          )}
        </div>

        <div class="w-2/3 mx-auto">
          <pre className="whitespace-pre-wrap">
            <p className="text-lg">{article.body}</p>
          </pre>
        </div>
      </article>
    </AppLayout>
  );
}
