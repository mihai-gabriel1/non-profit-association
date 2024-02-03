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
                <form action="{{ route('blog.store') }}" method="POST">
                    @csrf
                    <div>
                        <label for="title">Title</label>
                        <input type="text" id="title" name="title" required>
                    </div>
                    <div>
                        <label for="content">Content</label>
                        <textarea id="content" name="content" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
        </div>
    </div>

@endsection
