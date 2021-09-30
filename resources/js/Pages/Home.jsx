import React from "react";
import { Link } from "@inertiajs/inertia-react";
import AppLayout from "@/Layouts/AppLayout";
import SadEmoji from "@/Components/Emojis/SadEmoji";

function Home({ articles }) {
  return (
    <AppLayout>
      {articles.length > 0 ? (
        <div className="flex flex-col w-2/3 gap-4 mx-auto mb-4">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={route("articles.show", article)}
              className="outline-none group"
            >
              <article className="p-4 bg-white hover:bg-gray-200 group-focus:bg-gray-200">
                <h2 className="text-2xl line-clamp-1">{article.title}</h2>

                <p className="text-gray-600 line-clamp-2">{article.body}</p>

                <span className="block mt-1 text-sm text-gray-500">
                  {article.created_at}
                </span>

                <div className="flex items-center gap-4 mt-2">
                  {article.category && (
                    <div className="px-2 py-1 font-semibold text-white bg-gray-800 rounded">
                      {article.category.name}
                    </div>
                  )}

                  <div className="flex items-center gap-1">
                    {article.tags &&
                      article.tags.map((tag) => (
                        <div
                          key={tag.id}
                          className="px-2 py-1 text-sm font-semibold text-white bg-blue-400 rounded"
                        >
                          {tag.name}
                        </div>
                      ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-8">
          <SadEmoji />
          <p className="font-semibold">Sorry, No articles found.</p>
          <p className="font-semibold">Go to "/admin" to manage articles.</p>
        </div>
      )}
    </AppLayout>
  );
}

export default Home;
