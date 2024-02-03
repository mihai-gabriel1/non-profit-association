@extends('layouts.app')

@section('content')

    <div class="blog-component">
        @include('components.header')
        <div class="blog-posts">
            <div class="blog-posts">
                @foreach ($posts as $post)
                    <div class="blog-post">
                        <h3>{{ $post->title }}</h3>
                        <p>{{ $post->content }}</p>
                    </div>
                @endforeach
            </div>

        </div>
        @include('components.footer')
    </div>

@endsection
