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
        /** @var Article */
        $article = Article::create($request->validated());

        if ($request->hasFile('image_url')) {
            $article->addMediaFromRequest('image_url')
                ->toMediaCollection('articles');
        }

        return $article;
    }

    public function handleUpdate(FormRequest $request, Article $article)
    {
        $validated = $request->validated();

        if ($request->hasFile('image_url')) {
            $article->updateMedia($request->file('image_url'), 'articles');
        }

        return $article->update($validated);
    }

    public function handleDestroy(Article $article)
    {
        return $article->delete();
    }
}
