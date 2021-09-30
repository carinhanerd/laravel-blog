<?php

namespace App\Http\Controllers;

use App\Http\Requests\Article\StoreArticleRequest;
use App\Http\Requests\Article\UpdateArticleRequest;
use App\Repositories\ArticleRepository;
use App\Models\Article;

class ArticleController extends Controller
{
    private $repository;

    public function __construct(ArticleRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        $articles = Article::query()
            ->latest()
            ->get();

        return inertia('Articles/Index', compact('articles'));
    }

    public function create()
    {
        $collection = $this->repository->categoriesTags();

        return inertia('Articles/Create', compact('collection'));
    }

    public function store(StoreArticleRequest $request)
    {
        $this->repository->handleStore($request);

        return redirect()->route('articles.index');
    }

    public function show(Article $article)
    {
        $article->load(['category', 'tags']);

        return inertia('Articles/Show', compact('article'));
    }

    public function edit(Article $article)
    {
        $collection = $this->repository->categoriesTags();

        return inertia('Articles/Edit', compact('article', 'collection'));
    }

    public function update(Article $article, UpdateArticleRequest $request)
    {
        $this->authorize('update', $article);

        $this->repository->handleUpdate($request, $article);

        return redirect()->route('articles.index');
    }

    public function destroy(Article $article)
    {
        $this->authorize('destroy', $article);

        $this->repository->handleDestroy($article);

        return redirect()->route('articles.index');
    }
}
