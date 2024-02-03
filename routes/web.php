<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogPostController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/about', function () {
    return view('about');
})->name('about');

Route::get('/join-us', function () {
    return view('joinus-forms');
})->name('join-us');

Route::get('/projects', function () {
    return view('projects');
})->name('projects');

Route::get('/joinus-forms', function () {
    return view('joinus-forms');
})->name('joinus-forms');

Route::get('/donate', function () {
    return view('donate');
})->name('donate');

Route::get('/cookies-consent', function () {
    return view('cookies-consent');
})->name('cookies-consent');

//blog routes
Route::get('/blog', [BlogPostController::class, 'index'])->name('blog.index');
Route::post('/blog', [BlogPostController::class, 'store'])->name('blog.store')->middleware('auth');


Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
