<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;

class AdminPanelController extends Controller
{
    public function __invoke()
    {
        $users = User::query()
            ->withCount('articles')
            ->get();

        return inertia('Admin/Index', compact('users'));
    }
}
