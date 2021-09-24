import React from "react";
import { Link } from "@inertiajs/inertia-react";
import AppLayout from "@/Layouts/AppLayout";
import SadEmoji from "@/Components/Emojis/SadEmoji";

function Home({ articles }) {
  return (
    <AppLayout>
      {articles.length > 0 ? (
        <div className="flex flex-col gap-4 mb-4">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={route("articles.show", article)}
              className="outline-none group"
            >
              <article className="flex gap-4 p-4 bg-white hover:bg-gray-200 group-focus:bg-gray-200">
                <img
                  src={article.image ?? "/assets/img/default-article-pic.png"}
                  alt="article image"
                  className="w-32 h-32"
                />

                <div>
                  <h2 className="text-xl line-clamp-1">{article.title}</h2>

                  <p className="text-gray-600 line-clamp-2">{article.body}</p>

                  <div className="flex items-center gap-4 mt-2">
                    {article.category && (
                      <div className="inline-block p-1 text-sm font-semibold text-white bg-gray-800 rounded">
                        {article.category.name}
                      </div>
                    )}

                    {article.tags &&
                      article.tags.map((tag) => (
                        <div
                          key={tag.id}
                          className="text-sm text-gray-700 bg-blue-300 rounded-lg"
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
