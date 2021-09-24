<?php

use App\Http\Controllers\Admin\AdminPanelController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\TagController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\WebController;
use Illuminate\Support\Facades\Route;

Route::get('/', [WebController::class, 'home'])->name('home');
Route::get('/about', [WebController::class, 'about'])->name('about');

Route::resource('/articles', ArticleController::class)->only('show');

Route::middleware('auth')->prefix('/admin')->group(function () {
    Route::get('/', AdminPanelController::class)->name('admin');
    Route::resource('/articles', ArticleController::class)->except('show');
    Route::resource('/categories', CategoryController::class)->except('show');
    Route::resource('/tags', TagController::class)->except('show');
});

require __DIR__ . '/auth.php';
