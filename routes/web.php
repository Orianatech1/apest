<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/contact', function () {
    return view('pages.contact');
});

Route::get('/team', function () {
    return view('pages.team');
});

Route::get('/services', function () {
    return view('pages.services');
});
