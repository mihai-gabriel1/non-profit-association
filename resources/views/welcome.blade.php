<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Asociatia Islaz 21 | Daruieste Speranta</title>
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        @vite(['resources/js/app.js'])
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    </head>
    <body>
    <div class="header">
        <nav class="navbar navbar-dark navbar-expand-sm bg-dark fixed-top">
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
                        Ne dedicăm evoluției satelor Islaz și Moldoveni, susținând proiecte care aduc îmbunătățiri directe în viața comunității. Prin unirea forțelor, facem pasul către un viitor mai prosper pentru toți locuitorii.
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
                        Luptăm pentru un mediu curat și sănătos, implementând soluții pentru reducerea poluării. Responsabilitatea față de natură este esențială pentru noi, iar acțiunile noastre sunt gândite pentru a proteja și a păstra frumusețea naturală a regiunii.
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
                        Valorificăm tradițiile locale și promovăm satul Islaz ca destinație turistică de neuitat. Cultura și istoria bogată sunt reflectate în evenimentele noastre, atrăgând vizitatori și susținând economia locală.
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
                    Unind Islaz și Moldoveni, Asociația Rural 21 catalizează dezvoltarea comunitară și conservarea tradițiilor.
                </p>
                <p class="about-us-p">
                    Asociația Rural 21 se dedica susținerii celor în nevoie din Islaz și Moldoveni, oferind nu doar ajutor material, ci și programe educative care îmbrățișează tradițiile și inovația. Ne străduim să construim un mediu în care fiecare membru al comunității să se simtă valorizat și sprijinit.
                </p>
                <p class="about-us-p">
                    Păstrăm vii tradițiile care definesc spiritul comunităților noastre, promovându-le ca parte integrală a identității locale. În același timp, punem accent pe adaptarea la noile tehnologii, facilitând accesul la informație și educație modernă, pentru a ține pasul cu schimbările rapide ale lumii în care trăim.
                </p>
            </div>
        </div>
    </div>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    </body>
</html>
