<?php

namespace App\Http\Controllers;

use App\Models\Article;

class WebController extends Controller
{
    public function home()
    {
        $articles = Article::query()
            ->with(['category', 'tags'])
            ->latest()
            ->get();

        return inertia('Home', compact('articles'));
    }

    public function about()
    {
        return inertia('About');
    }
}
