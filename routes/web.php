<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

// Route::get('/', function () {
//     return inertia('Home', ['name' => 'Kaizen']);
// });
Route::get('/', [PostController::class, 'index'])->name('page.home');
Route::resource('posts', PostController::class)->except('index');
