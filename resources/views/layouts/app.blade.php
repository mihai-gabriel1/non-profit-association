<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Asociația Islaz 21 | Daruieste Speranta</title>
    <!-- Fonts -->
    <link rel="stylesheet" href="{{ asset('css/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw==" crossorigin="anonymous" referrerpolicy="no-referrer" />    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet"/>
    @vite(['resources/js/app.js'])
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    @stack('css')
</head>
<body>
<div id="cookieConsentPopup" class="cookie-consent-popup">
    <p>Colectǎm date cookies pentru o experiențǎ cat mai plǎcutǎ. <a href="{{ route('cookies-consent') }}" class="nav-link active">Aflǎ mai multe</a> </p>
    <button id="acceptCookieConsent">Am ințeles!</button>
</div>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        var consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            document.getElementById('cookieConsentPopup').style.display = 'block';
        }

        document.getElementById('acceptCookieConsent').onclick = function(e) {
            localStorage.setItem('cookieConsent', true);
            document.getElementById('cookieConsentPopup').style.display = 'none';
        }
    });

</script>
@yield('content')
@stack('js')
</body>
</html>
