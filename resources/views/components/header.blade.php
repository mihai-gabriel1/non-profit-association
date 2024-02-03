<div class="header">
    <nav class="navbar navbar-dark navbar-expand-md bg-dark">
        <div class="container">
            <a href="{{ url('/') }}" class="navbar-brand">
                <i class="fas fa-blog"></i> &nbsp;
                Asociația Islaz 21
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarCollapse" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="{{ url('/') }}" class="nav-link active">Acasǎ</a>
                    </li>
                    <li class="nav-item">
                        <a href="{{ route('about') }}" class="nav-link active">Despre noi</a>
                    </li>
                    <li class="nav-item">
                        <a href="{{ route('projects') }}" class="nav-link active">Proiecte viitoare</a>
                    </li>
                    <li class="nav-item">
                        <a href="{{ route('joinus-forms') }}" class="nav-link active">Vino cu noi</a>
                    </li>
                    <li class="nav-item">
                        <a href="{{ route('blog.index') }}" class="nav-link active">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a href="#footer" class="nav-link active">Contact</a>
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
        <a href="{{ route('about') }}" class="find-more">Aflā mai multe</a>
        <a href="{{ route('projects') }}" class="see-causes">Cauzele noastre</a>
    </div>
</div>
