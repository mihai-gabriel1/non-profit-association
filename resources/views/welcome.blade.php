<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Asociația Islaz 21 | Daruieste Speranta</title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet"/>
    @vite(['resources/js/app.js'])
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet">
</head>
<body>
<div class="header">
    <nav class="navbar navbar-dark navbar-expand-sm bg-dark">
        <div class="container">
            <a href="/" class="navbar-brand">
                <i class="fas fa-blog"></i> &nbsp;
                Asociația Islaz 21
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarCollapse" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="" class="nav-link active">
                            Acasǎ
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link active">
                            Despre noi
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link active">
                            Blog
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link active">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="header-title">
        <p class="give-hand">Întinde o mânā</p>
        <p class="better-world">Pentru o lume mai bunā</p>
    </div>
    <div class="header-buttons">
        <p class="see-causes">
            Cauzele noastre
        </p>
        <p class="find-more">
            Aflā mai multe
        </p>
    </div>
</div>
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
<div class="about-us container">
    <div class="row">
        <div class="col-lg-6 col-md-12 about-us-left">
            <img src="{{ asset('assets/img/team.webp') }}" alt="Growth">
        </div>
        <div class="col-lg-6 col-md-12  about-us-text">
            <p class="section-title section-title-about">
                Unind Islaz și Moldoveni, Asociația Rural 21 catalizează dezvoltarea comunitară și conservarea
                tradițiilor.
            </p>
            <p class="about-us-p">
                Asociația Rural 21 se dedica susținerii celor în nevoie din Islaz și Moldoveni, oferind nu doar ajutor
                material, ci și programe educative care îmbrățișează tradițiile și inovația. Ne străduim să construim un
                mediu în care fiecare membru al comunității să se simtă valorizat și sprijinit.
            </p>
            <p class="about-us-p">
                Păstrăm vii tradițiile care definesc spiritul comunităților noastre, promovându-le ca parte integrală a
                identității locale. În același timp, punem accent pe adaptarea la noile tehnologii, facilitând accesul
                la informație și educație modernă, pentru a ține pasul cu schimbările rapide ale lumii în care trăim.
            </p>
        </div>
    </div>
</div>
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
<div class="team-area-wrapper">
    <div class="team-area container">
        <p class="section-title team-title">
            Hai sa facem cunoştințǎ
        </p>
        <div class="row team-inner">
            <div class="col-lg-3 col-md-6">
                <div class="team_item">
                    <div class="team_img">
                        <img class="card-img-top img-fluid" src="{{ asset('assets/team/raul.jpeg') }}"
                             alt="team member">
                    </div>
                    <div class="team_name">
                        <p class="team-member-name">
                            Raul Gheorghina
                        </p>
                        <p class="team-member-title">
                            Preşedinte
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="team_item">
                    <div class="team_img">
                        <img class="card-img-top img-fluid" src="{{ asset('assets/team/ali.jpeg') }}" alt="team member">
                    </div>
                    <div class="team_name">
                        <p class="team-member-name">
                            Ali Cranta
                        </p>
                        <p class="team-member-title">
                            Membru
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="team_item">
                    <div class="team_img">
                        <img class="card-img-top img-fluid" src="{{ asset('assets/team/valentin.jpeg') }}"
                             alt="team member">
                    </div>
                    <div class="team_name">
                        <p class="team-member-name">
                            Valentin Uba
                        </p>
                        <p class="team-member-title">
                            Membru
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="team_item">
                    <div class="team_img">
                        <img class="card-img-top img-fluid" src="{{ asset('assets/team/cornelia.jpeg') }}"
                             alt="team member">
                    </div>
                    <div class="team_name">
                        <p class="team-member-name">
                            Cornelia Popescu
                        </p>
                        <p class="team-member-title">
                            Membru
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="team_item">
                    <div class="team_img">
                        <img class="card-img-top img-fluid" src="{{ asset('assets/team/cristina.jpeg') }}"
                             alt="team member">
                    </div>
                    <div class="team_name">
                        <p class="team-member-name">
                            Cristina Gabriela
                        </p>
                        <p class="team-member-title">
                            Membru
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="team_item">
                    <div class="team_img">
                        <img class="card-img-top img-fluid" src="{{ asset('assets/team/dana.jpeg') }}"
                             alt="team member">
                    </div>
                    <div class="team_name">
                        <p class="team-member-name">
                            Dana Iordan
                        </p>
                        <p class="team-member-title">
                            Membru
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="team_item">
                    <div class="team_img">
                        <img class="card-img-top img-fluid" src="{{ asset('assets/team/nineta.jpeg') }}"
                             alt="team member">
                    </div>
                    <div class="team_name">
                        <p class="team-member-name">
                            Nineta Cranta
                        </p>
                        <p class="team-member-title">
                            Membru
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="team_item">
                    <div class="team_img">
                        <img class="card-img-top img-fluid" src="{{ asset('assets/team/adelina.jpeg') }}"
                             alt="team member">
                    </div>
                    <div class="team_name">
                        <p class="team-member-name">
                            Adelina Naidin
                        </p>
                        <p class="team-member-title">
                            Voluntar
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="team_item">
                    <div class="team_img">
                        <img class="card-img-top img-fluid" src="{{ asset('assets/team/luiza.jpeg') }}"
                             alt="team member">
                    </div>
                    <div class="team_name">
                        <p class="team-member-name">
                            Luiza Ciucu
                        </p>
                        <p class="team-member-title">
                            Voluntar
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="home-become-volunteer-wrapper">
    <div class="become-volunteer container">
        <p class="volunteer-title">
            Alǎturǎ-te echipei noastre
        </p>
        <p class="volunteer-text">
            Alătură-te Asociației Rural 21 și contribuie la dezvoltarea comunităților Islaz și Moldoveni. Împreună,
            putem aduce schimbări semnificative, fie că ești pasionat de mediu, educație sau cultură. Haide să construim
            un viitor mai bun, mână de la mână!
        </p>
        <a href="#" class="volunteer-join-us">
            Sǎ trecem la treabǎ
        </a>
    </div>
</div>
<div class="latest-stories container">
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossorigin="anonymous"></script>
</body>
</html>
