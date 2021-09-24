import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import GoBack from "@/Components/GoBack";

export default function Show({ article }) {
  return (
    <AppLayout>
      <GoBack to={route("home")} />
      <article>
        <div className="flex flex-col items-end px-6 mb-8">
          <div className="flex items-center">
            <h1 className="text-5xl font-semibold leading-tight text-right">
              {article.title}
            </h1>

            <div className="w-24 ml-6 overflow-hidden border-2 border-black rounded-full">
              <img
                src={article.image ?? "/assets/img/default-article-pic.png"}
                alt="article image"
              />
            </div>
          </div>

          <h2 className="leading-normal text-gray-500">
            Published on {article.created_at}
          </h2>

          {article.category && (
            <div className="px-3 py-2 mt-4 font-semibold text-white bg-gray-800 rounded">
              {article.category.name}
            </div>
          )}
        </div>

        <pre className="whitespace-pre-wrap">
          <p className="text-lg">{article.body}</p>
        </pre>
      </article>
    </AppLayout>
  );
}
