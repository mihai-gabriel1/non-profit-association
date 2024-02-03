@extends('layouts.app')

@section('content')
    @include('components.header')
    <div class="our-causes container">
        <p class="our-causes section-title">
            Cauzele dupa care ne ghidǎm
        </p>
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="single-cause-div">
                    <p class="single-cause-title">
                        Dezoltare Comunitarǎ
                    </p>
                    <img src="{{ asset('assets/img/development.png') }}" alt="Growth">
                    <p class="single-cause-description">
                        Ne dedicăm evoluției satelor Islaz și Moldoveni, susținând proiecte care aduc îmbunătățiri directe
                        în viața comunității. Prin unirea forțelor, facem pasul către un viitor mai prosper pentru toți
                        locuitorii.
                    </p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="single-cause-div">
                    <p class="single-cause-title">
                        Protecția Mediului
                    </p>
                    <img src="{{ asset('assets/img/environment.jpeg') }}" alt="Growth">
                    <p class="single-cause-description">
                        Luptăm pentru un mediu curat și sănătos, implementând soluții pentru reducerea poluării.
                        Responsabilitatea față de natură este esențială pentru noi, iar acțiunile noastre sunt gândite
                        pentru a proteja și a păstra frumusețea naturală a regiunii.
                    </p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="single-cause-div">
                    <p class="single-cause-title">
                        Tradiții și Turism
                    </p>
                    <img src="{{ asset('assets/img/turism.jpeg') }}" alt="Growth">
                    <p class="single-cause-description">
                        Valorificăm tradițiile locale și promovăm satul Islaz ca destinație turistică de neuitat. Cultura și
                        istoria bogată sunt reflectate în evenimentele noastre, atrăgând vizitatori și susținând economia
                        locală.
                    </p>
                </div>
            </div>
        </div>
    </div>
    @include('components.about-us')
    <div class="finished-projects container">
        <p class="section-title finished-projects">
            Proiecte finalizate
        </p>
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <figure>
                            <img class="card-img-top img-fluid" src="{{ asset('assets/img/education.webp') }}" alt="Growth">
                        </figure>
                        <div class="card_inner_body">
                            <p class="card-title">
                                Educația este un drept fundamental
                            </p>
                            <p class="card-text">
                                Incercǎm sa asigurǎm tutoror copiilor din Islaz si Moldoveni mijloacele necesare pentru a
                                merge la scoala, cat si rechizitele necesare, alaturi de alte materiale.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <figure>
                            <img class="card-img-top img-fluid" src="{{ asset('assets/img/hungry.webp') }}" alt="Growth">
                        </figure>
                        <div class="card_inner_body">
                            <p class="card-title">
                                Asigurǎm haine si alimente celor nevoiaşi
                            </p>
                            <p class="card-text">
                                Am strâns si am donat atât haine cat si alimente persoanelor la nevoie din Islaz si
                                Moldoveni.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <figure>
                            <img class="card-img-top img-fluid" src="{{ asset('assets/img/cloth.webp') }}" alt="Growth">
                        </figure>
                        <div class="card_inner_body">
                            <p class="card-title">
                                Educația este un drept fundamental
                            </p>
                            <p class="card-text">
                                Incercǎm sa asigurǎm tutoror copiilor din Islaz si Moldoveni mijloacele necesare pentru a
                                merge la scoala, cat si rechizitele necesare, alaturi de alte materiale.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p class="see-more-posts text-center">
            Apasa <a href="#">aici</a> pentru o lista complete cu activitatile derulate de catre noi.
        </p>
    </div>
    <div class="future-projects container">
        <p class="section-title future-title">
            Proiecte viitoare
        </p>
        <div class="row">
            <div class="col-lg-6">
                <div class="single_event">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6">
                            <figure>
                                <img class="card-img-top img-fluid" src="{{ asset('assets/img/water.webp') }}" alt="Growth">
                            </figure>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="content-wrapper">
                                <p class="future-post-title">
                                    Apǎ potabilǎ in zonele greu accesibile
                                </p>
                                <p class="future-post-p">
                                    Furnizarea si/sau transportarea de apa potabila in zonele greu accesibile, varstnicilor
                                    sau persoanelor cu dificultati de deplasare.
                                </p>
                                <a href="#" class="find-more">
                                    Aflǎ mai multe
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="single_event">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6">
                            <figure>
                                <img class="card-img-top img-fluid" src="{{ asset('assets/img/water.webp') }}" alt="Growth">
                            </figure>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="content-wrapper">
                                <p class="future-post-title">
                                    Apǎ potabilǎ in zonele greu accesibile
                                </p>
                                <p class="future-post-p">
                                    Furnizarea si/sau transportarea de apa potabila in zonele greu accesibile, varstnicilor
                                    sau persoanelor cu dificultati de deplasare.
                                </p>
                                <a href="#" class="find-more">
                                    Aflǎ mai multe
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="single_event">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6">
                            <figure>
                                <img class="card-img-top img-fluid" src="{{ asset('assets/img/water.webp') }}" alt="Growth">
                            </figure>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="content-wrapper">
                                <p class="future-post-title">
                                    Apǎ potabilǎ in zonele greu accesibile
                                </p>
                                <p class="future-post-p">
                                    Furnizarea si/sau transportarea de apa potabila in zonele greu accesibile, varstnicilor
                                    sau persoanelor cu dificultati de deplasare.
                                </p>
                                <a href="#" class="find-more">
                                    Aflǎ mai multe
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="single_event">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6">
                            <figure>
                                <img class="card-img-top img-fluid" src="{{ asset('assets/img/water.webp') }}" alt="Growth">
                            </figure>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="content-wrapper">
                                <p class="future-post-title">
                                    Apǎ potabilǎ in zonele greu accesibile
                                </p>
                                <p class="future-post-p">
                                    Furnizarea si/sau transportarea de apa potabila in zonele greu accesibile, varstnicilor
                                    sau persoanelor cu dificultati de deplasare.
                                </p>
                                <a href="#" class="find-more">
                                    Aflǎ mai multe
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @include('components.team-area')
    @include('components.join-us')
    @include('components.footer')
    @push('js')
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
        <script src="{{ asset('js/owl.carousel.min.js') }}"></script>
        <script>
            $('.owl-carousel').owlCarousel({
                loop:true,
                margin:50,
                responsiveClass:true,
                autoplay: true,
                touchDrag: true,
                responsive:{
                    0:{
                        items:1,
                        nav:true
                    },
                    350:{
                        items:1,
                        nav:true
                    },
                    600:{
                        items:2,
                        nav:false,
                        margin: 10,
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:false
                    }
                }
            })
        </script>
    @endpush
@endsection
