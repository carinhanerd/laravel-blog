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

        if (!empty($request->post('tags'))) {
            $values = array_map(function ($tag) {
                return $tag['value'];
            }, $request->post('tags'));

            $article->tags()->attach($values);
        }

        return $article;
    }

    public function handleUpdate(FormRequest $request, Article $article)
    {
        $validated = $request->validated();

        if (!empty($request->post('tags'))) {
            $values = array_map(function ($tag) {
                return $tag['value'];
            }, $request->post('tags'));

            $article->tags()->sync($values);
        }

        return $article->update($validated);
    }

    public function handleDestroy(Article $article)
    {
        return $article->delete();
    }
}
