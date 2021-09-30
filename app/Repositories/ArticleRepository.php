<?php

namespace App\Repositories;

use App\Models\Article;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Foundation\Http\FormRequest;

final class ArticleRepository
{
    public function categoriesTags()
    {
        $categories = Category::query()
            ->orderBy('name')
            ->get();

        $tags = Tag::query()
            ->orderBy('name')
            ->get();

        return compact('categories', 'tags');
    }

    public function handleStore(FormRequest $request): Article
    {
        $article = Article::create($request->validated());

        $tags = array_map(function ($tag) {
            return $tag['value'];
        }, $request->tags);

        $article->tags()->attach($tags);

        return $article;
    }

    public function handleUpdate(FormRequest $request, Article $article)
    {
        $validated = $request->validated();

        $tags = array_map(function ($tag) {
            return $tag['value'];
        }, $request->tags);

        $article->tags()->sync($tags);

        return $article->update($validated);
    }

    public function handleDestroy(Article $article)
    {
        return $article->delete();
    }
}
