@extends('layouts.app')

@section('content')

    <div class="join-us-component">
        @include('components.header')
        <div class="joinus-forms-wrapper container">
            <h2 class="join-us-section-title text-center">Hai in echipa noastrǎ</h2>
            <div class="membership-information">
                <p>Membru al Asociației Rural 21 poate fi orice persoană fizică, indiferent de naționalitate, sex,
                    religie, origine etnică, dar și persoane juridice care aderă la scopul și principiile Asociației
                    noastre și doresc să participe, indiferent de mijloace, la realizarea obiectivelor acesteia.</p>

                <p>Calitatea de membru poate fi dobândită pe baza unei cereri scrise tipizate (cererea de adeziune)
                    adresată Consiliului Director, după un stagiu de colaborator voluntar de cel puțin 3 luni, cu
                    aprobarea Adunării Generale a asociației.</p>

                <p>Descarcă aici: <a href="#">Cererea de adeziune</a> / <a href="#">Formular de afiliere</a></p>

                <p>Transmiteți cererea de adeziune/formularul de afiliere semnată și scanată la adresa de email: <a
                            href="mailto:asociatia_rural21@yahoo.com">asociatia_rural21@yahoo.com</a>.</p>

                <p>După analizarea cererii dumneavoastră veți fi invitat la o întâlnire pentru a ne cunoaște, pentru a
                    descoperi așteptările pe care le aveți de la noi și care va fi implicarea dumneavoastră la
                    îndeplinirea obiectivelor Asociației.</p>

                <p>Ca urmare a celor mai sus menționate, Consiliul Director va aproba adeziunea dumneavoastră și vi se
                    va comunica hotărârea în scris sau telefonic și vi se va solicita achitarea taxei de înscriere (a se
                    vedea mai jos), copie după BI/CI și o fotografie tip buletin (în format electronic) în vederea
                    finalizării procedurii.</p>

                <h3>TAXE ȘI COTIZAȚII*:</h3>
                <ul>
                    <li>Costurile pentru obținerea calității de membru/membru afiliat sunt:</li>
                    <li>Cotizația anuală pentru persoane fizice cu venit: 150 Lei</li>
                    <li>Cotizația anuală pentru persoane juridice: 500 Lei</li>
                    <li>Cotizația anuală pentru persoane fizice care sunt elevi și studenți: 50 Lei</li>
                </ul>
                <p>* Taxele și cotizațiile pot fi modificate de Consiliul Director fără notificare prealabilă pe site-ul
                    nostru.</p>

                <p>Pentru a afla mai multe informații și detalii despre modalitatea de înscriere în Rural21 ne puteți
                    scrie la adresa de email: <a
                            href="mailto:asociatia_rural21@yahoo.com">asociatia_rural21@yahoo.com</a></p>
            </div>
        </div>
        @include('components.footer')
    </div>

@endsection