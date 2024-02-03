@extends('layouts.app')

@section('content')

    <div class="about-us-component">
        @include('components.header')
        @include('components.about-us')
        <div class="container join-us-text">
            <p>
                Suntem convinși că munca pe care o facem, te-a convins că și tu poți face bine, că și tu poți contribui
                pentru a aduce o fărăma de bucurie în sufletul celor care au nevoie cu disperare de o mana întinsă.
            </p>
            <p>
                Daca ai vǎzut toate <a href="{{ route('blog.index') }}">proiectele</a> noastre şi doreşti sa faci parte din echipa noastrǎ,
                apasǎ pe butonul galben de mai jos, si sa trecem la treabǎ!
            </p>
        </div>
        @include('components.join-us')

        @include('components.footer')
    </div>

@endsection