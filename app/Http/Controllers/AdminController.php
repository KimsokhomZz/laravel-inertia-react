<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;

class AdminController extends Controller
{
    public function index(): Response
    {
        return inertia('Admin/AdminIndex');
    }
}
