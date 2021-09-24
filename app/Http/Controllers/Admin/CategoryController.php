<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Category\StoreCategoryRequest;
use App\Http\Requests\Category\UpdateCategoryRequest;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::query()
            ->withCount('articles')
            ->orderByDesc('articles_count')
            ->get();

        return inertia('Categories/Index', compact('categories'));
    }

    public function create()
    {
        return inertia('Categories/Create');
    }

    public function store(StoreCategoryRequest $request)
    {
        Category::create($request->validated());

        return redirect()->route('categories.index');
    }

    public function edit(Category $category)
    {
        return inertia('Categories/Edit', compact('category'));
    }

    public function update(Category $category, UpdateCategoryRequest $request)
    {
        $category->update($request->validated());

        return redirect()->route('categories.index');
    }

    public function destroy(Category $category)
    {
        $category->delete();

        return redirect()->route('categories.index');
    }
}
