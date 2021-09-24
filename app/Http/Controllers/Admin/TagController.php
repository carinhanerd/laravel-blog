<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Tag\StoreTagRequest;
use App\Http\Requests\Tag\UpdateTagRequest;
use App\Models\Tag;

class TagController extends Controller
{
    public function index()
    {
        $tags = Tag::query()
            ->withCount('articles')
            ->orderByDesc('articles_count')
            ->get();

        return inertia('Tags/Index', compact('tags'));
    }

    public function create()
    {
        return inertia('Tags/Create');
    }

    public function store(StoreTagRequest $request)
    {
        Tag::create($request->validated());

        return redirect()->route('tags.index');
    }

    public function edit(Tag $tag)
    {
        return inertia('Tags/Edit', compact('tag'));
    }

    public function update(Tag $tag, UpdateTagRequest $request)
    {
        $tag->update($request->validated());

        return redirect()->route('tags.index');
    }

    public function destroy(Tag $tag)
    {
        $tag->delete();

        return redirect()->route('tags.index');
    }
}
