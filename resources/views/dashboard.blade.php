@extends('layouts.app')

@section('content')

    <div class="dashboard-component">
        <div class="blog-nav">
            <form class="dashboard-logout-btn" action="{{ route('logout') }}" method="POST">
                @csrf
                <button type="submit" class="btn btn-link nav-link active" style="padding: 0; border: none; background: none;">Log out</button>
            </form>
        </div>
        <div class="blog-inputs container mt-4 mb-4">
            <h2 class="text-center">
                Blog control panel
            </h2>
        </div>
    </div>

@endsection
