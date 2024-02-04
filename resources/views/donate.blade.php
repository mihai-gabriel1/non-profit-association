@extends('layouts.app')

@section('content')

    <div class="donate-component">
        @include('components.header')
        <div class="container donate-component-wrapper">
            <h2>
                Iatǎ cateva metode prin care ne poti sprijini:
            </h2>
            <p style="font-weight: 500; font-size: 18px;">
                Redirectioneaza 3,5% din impozitul anual
            </p>
            <p>
                Aslciatia Rural21 caută în continuare fonduri pentru dezvoltarea și implementarea unor proiecte complexe
                pentru comunitatea locală, pe diferite teme de interes din aria noastră de competență, în vederea
                atingerii obiectivelor pentru care a fost constituită.
            </p>
            <p>
                Rezultatele proiectelor noastre, de la inițiere până în prezent, le poți regăsi accesând urmǎtorul <a
                        href="{{ route('blog.index') }}">link</a>.
            </p>
            <table style="width: 100%; border-collapse: collapse;">
                <tbody>
                <tr>
                    <td style="border: 1px solid #dddddd; padding: 8px;"><strong>Redirecționează până la 3,5%</strong>
                    </td>
                    <td style="border: 1px solid #dddddd; padding: 8px;"><strong>Cum ne mai poți sprijini</strong></td>
                </tr>
                <tr>
                    <td style="border: 1px solid #dddddd; padding: 8px;">
                        <p>În fiecare an poți alege să redirecționezi până la 3,5% din impozitul anual plătit statului
                            către un ONG.</p>
                        <p>Procedura de redirecționare nu durează decât 5 minute și constă în completarea Declarației
                            230, pe care o poți descărca <strong><a
                                        href="https://www.asociatia-rural21.ro/formular_RURAL21.pdf" target="_blank"
                                        rel="noopener noreferrer">aici</a></strong>. Aceasta trebuie depusă personal sau
                            prin poștă, la organul fiscal de care aparții, până la data de 25 mai a fiecărui an.</p>
                        <p>Fii alături de noi și redirecționează până la 3,5%!</p>
                    </td>
                    <td style="border: 1px solid #dddddd; padding: 8px;">
                        <p>Ne poți sprijini prin donare sau sponsorizare pentru a susține proiectele noastre. Donația
                            sau sponsorizarea poate fi făcută prin transfer bancar sau depunere directă la ghișeul
                            băncii.</p>
                        <p>Pentru alte tipuri de donații/ sponsorizări te rugăm să ne contactezi la adresa de email <a
                                    href="mailto:asociatia_rural21@yahoo.com">asociatia_rural21@yahoo.com</a></p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="border: 1px solid #dddddd; padding: 8px;">&nbsp;</td>
                </tr>
                </tbody>
            </table>

            <div class="donate-information mt-3">
                <h3>REDIRECȚIONEAZĂ PÂNĂ LA 3,5% DIN IMPOZITUL TĂU PE VENIT</h3>
                <p><strong>DESCARCĂ</strong> Formularul 230 dacă în 2024 ai avut venituri din salarii sau din pensii,
                    iar dacă ai realizat venituri și/sau din activități independente (profesii libere, drepturi de
                    proprietate intelectuală, chirii), poți redirecționa completând datele asociației noastre privind
                    destinația sumei reprezentând până la 3,5% din impozitul anual datorat.</p>

                <p><strong>COMPLETEAZĂ</strong> formularul urmărind instrucțiunile de la finalul documentului descărcat
                    (datele Asociației Rural21 sunt deja completate).</p>

                <p><strong>TRIMITE</strong> formularul la <a
                            href="https://static.anaf.ro/static/10/Anaf/AsistentaContribuabili_r/telefoane_judete/Regiuni.htm">Administrația
                        Financiară (ANAF)</a> de care aparții până la 25 mai
                    2024, direct sau prin poștă cu scrisoare recomandată sau poți trimite / lăsa formularul completat la
                    sediul Asociației Rural21.</p>

                <p>Dacă vrei să ne ajuți mai mult, îți poți convinge apropiații, prietenii și colegii să ți se alăture.
                    Fiecare ajutor contează! Adună cât mai multe formulare și scrie-ne la <a
                            href="mailto:asociatia_rural21@yahoo.com">asociatia_rural21@yahoo.com</a> să le luăm noi de
                    la tine.</p>

                <p><strong>DESCARCĂ FORMULARELE DE MAI JOS:</strong><br>Formularul 230 – Pentru persoane fizice cu
                    venituri salariale</p>

                <p><strong>DATELE NOASTRE DE IDENTIFICARE SUNT:</strong><br>Asociația Rural21<br>Banca: Banca
                    Transilvania<br>Cont IBAN: RO07BTRLRONCRT0623991801</p>
            </div>


        </div>
        @include('components.footer')
    </div>

@endsection