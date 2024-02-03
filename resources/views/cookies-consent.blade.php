@extends('layouts.app')

@section('content')

    <div class="about-us-component">
        @include('components.header')
        <div class="container cookies-consent-text mt-4 mb-4">
            <h2>Politica privind Cookie-urile</h2>
            <p>Asociația Islaz 21 utilizează cookie-uri pentru a îmbunătăți experiența utilizatorilor pe website-ul nostru, pentru a înțelege modul în care este folosit site-ul nostru, precum și pentru scopuri de marketing și publicitate. Prin continuarea navigării pe site-ul nostru, vă exprimați acordul pentru utilizarea acestora.</p>
            <p>Cookie-urile sunt fișiere de mici dimensiuni trimise către și stocate pe computerul dumneavoastră de către site-urile web pe care le vizitați. Cookie-urile sunt utilizate pe scară largă pentru a face site-urile să funcționeze, sau să funcționeze mai eficient, precum și pentru a oferi informații proprietarilor site-ului.</p>
            <p>Utilizăm cookie-uri pentru a îmbunătăți accesul la site-ul nostru și pentru a identifica vizitatorii recurenți. În plus, cookie-urile noastre îmbunătățesc experiența utilizatorului prin urmărirea și direcționarea intereselor acestuia. Cu toate acestea, această utilizare a cookie-urilor nu este în niciun fel legată de informații de identificare personală disponibile pe site-ul nostru.</p>
            <p>Pentru mai multe informații despre cookie-uri, inclusiv despre cum să vedeți ce cookie-uri au fost setate și cum să le gestionați și să le ștergeți, vizitați <a href="https://www.aboutcookies.org/">www.aboutcookies.org</a> sau <a href="https://www.allaboutcookies.org/">www.allaboutcookies.org</a>.</p>
            <p>Pentru a renunța la fiind urmărit de Google Analytics pe toate site-urile web, vizitați <a href="http://tools.google.com/dlpage/gaoptout">http://tools.google.com/dlpage/gaoptout</a>.</p>
        </div>
        @include('components.footer')
    </div>

@endsection
