// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import juridic from "../assets/logos/juridic.png";
import pfizica from "../assets/logos/pfizica.png";
import paypal from "../assets/logos/paypal.png";
import transfer from "../assets/logos/transfer.png";
import jucarii from "../assets/logos/jucarii.png";

const Donate = () => {
  return (
    <div className="donate-component">
      <Header />
      <div className="container donate-component-wrapper">
        <p>
          Asociația Rural21 caută în continuare fonduri pentru dezvoltarea și
          implementarea unor proiecte complexe pentru comunitatea locală, pe
          diferite teme de interes din aria noastră de competență, în vederea
          atingerii obiectivelor pentru care a fost constituită.
        </p>
        <p>
          Rezultatele proiectelor noastre, de la inițiere până în prezent, le
          poți regăsi accesând următorul <Link to="/projects">link</Link>.
        </p>

        <h1 className="text-center">Doneazǎ</h1>
        <p className="text-center mb-5">
          Link sau cv smecherie cu checkout pt stripe
        </p>

        <div className="row donate-other-ways">
          <div className="col-lg-4 col-md-6 col-sm-12 support-way">
            <img src={juridic} className="support-img" alt="Juridic" />{" "}
            <p className="other-way-title">Persoanǎ juridicǎ</p>
            <p className="other-way-description">
              Sponsorizează 20% din impozitul companiei tale pentru cei aflati
              in nevoie.
            </p>
            <a className="other-way-find-more" href="#">
              Mai multe informații
            </a>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 support-way">
            <img src={pfizica} className="support-img" alt="Juridic" />{" "}
            <p className="other-way-title">Persoanǎ fizicǎ</p>
            <p className="other-way-description">
              Redirecționează generos 3,5% din impozitul tău către susținerea
              celor aflați în nevoie.
            </p>
            <a className="other-way-find-more" href="#">
              Mai multe informații
            </a>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 support-way">
            <img
              src={paypal}
              className="support-img"
              alt="Doneazǎ prin PayPal"
            />{" "}
            <p className="other-way-title">Doneazǎ prin PayPal</p>
            <p className="other-way-description">
              Puteți dona și folosind PayPal pentru sprijinirea persoanelor
              aflate in dificultate.
            </p>
            <a className="other-way-find-more" href="#">
              Mai multe informații
            </a>
          </div>
          <div className="mt-4 col-lg-4 col-md-6 col-sm-12 support-way">
            <img src={transfer} className="support-img" alt="Juridic" />{" "}
            <p className="other-way-title">Transfer bancar</p>
            <p className="other-way-description">
              Acum poți face o donație prin transfer bancar, direct in contul
              asociației noastre.
            </p>
            <a className="other-way-find-more" href="#">
              Mai multe informații
            </a>
          </div>
          <div className="mt-4 col-lg-4 col-md-6 col-sm-12 support-way">
            <img src={jucarii} className="support-img" alt="Juridic" />{" "}
            <p className="other-way-title">Jucǎrii şi Rechizite</p>
            <p className="other-way-description">
              Copiii nefavorizați au nevoie de jucării și rechizite.
              Contactează-ne pentru a face o donație.
            </p>
            <a className="other-way-find-more" href="#">
              Mai multe informații
            </a>
          </div>
          <div className="mt-4 col-lg-4 col-md-6 col-sm-12 support-way">
            <img src={juridic} className="support-img" alt="Juridic" />{" "}
            <p className="other-way-title">Persoanǎ juridicǎ</p>
            <p className="other-way-description">
              Sponsorizează 20% din impozitul companiei tale pentru cei aflati
              in nevoie.
            </p>
            <a className="other-way-find-more" href="#">
              Mai multe informații
            </a>
          </div>
        </div>

        {/* 3.5% impozit anual*/}
        {/* <div className="table-responsive">
          <table
            className="table"
            style={{ width: "100%", borderCollapse: "collapse" }}
          >
            <tbody>
              <tr>
                <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
                  <strong>Redirecționează până la 3,5%</strong>
                </td>
                <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
                  <strong>Cum ne mai poți sprijini</strong>
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
                  <p>
                    În fiecare an poți alege să redirecționezi până la 3,5% din
                    impozitul anual plătit statului către un ONG.
                  </p>
                  <p>
                    Procedura de redirecționare nu durează decât 5 minute și
                    constă în completarea Declarației 230, pe care o poți
                    descărca{" "}
                    <strong>
                      <a
                        href="https://www.dropbox.com/scl/fi/ykezb8o16tbj19s2wq43y/formular_RURAL21.pdf?rlkey=9cbraedgjblljakbuory1k39m&dl=0"
                        target="_blank"
                        rel="noreferrer"
                      >
                        aici
                      </a>
                    </strong>
                    . Aceasta trebuie depusă personal sau prin poștă, la organul
                    fiscal de care aparții, până la data de 25 mai a fiecărui
                    an.
                  </p>
                  <p>Fii alături de noi și redirecționează până la 3,5%!</p>
                </td>
                <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
                  <p>
                    Ne poți sprijini prin donare sau sponsorizare pentru a
                    susține proiectele noastre. Donația sau sponsorizarea poate
                    fi făcută prin transfer bancar sau depunere directă la
                    ghișeul băncii.
                  </p>
                  <p>
                    Pentru alte tipuri de donații/ sponsorizări te rugăm să ne
                    contactezi la adresa de email{" "}
                    <a href="mailto:asociatia_rural21@yahoo.com">
                      asociatia_rural21@yahoo.com
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan="2"
                  style={{ border: "1px solid #dddddd", padding: "8px" }}
                >
                  &nbsp;
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}

        {/* impozit pe venit  */}
        {/* <div className="donate-information mt-5">
          <h3>REDIRECȚIONEAZĂ PÂNĂ LA 3,5% DIN IMPOZITUL TĂU PE VENIT</h3>
          <p>
            <strong>DESCARCĂ</strong> Formularul 230 dacă în 2024 ai avut
            venituri din salarii sau din pensii, iar dacă ai realizat venituri
            și/sau din activități independente (profesii libere, drepturi de
            proprietate intelectuală, chirii), poți redirecționa completând
            datele asociației noastre privind destinația sumei reprezentând până
            la 3,5% din impozitul anual datorat.
          </p>

          <p>
            <strong>COMPLETEAZĂ</strong> formularul urmărind instrucțiunile de
            la finalul documentului descărcat (datele Asociației Rural21 sunt
            deja completate).
          </p>

          <p>
            <strong>TRIMITE</strong> formularul la{" "}
            <a href="https://static.anaf.ro/static/10/Anaf/AsistentaContribuabili_r/telefoane_judete/Regiuni.htm">
              Administrația Financiară (ANAF)
            </a>{" "}
            de care aparții până la 25 mai 2024, direct sau prin poștă cu
            scrisoare recomandată sau poți trimite / lăsa formularul completat
            la sediul Asociației Rural21.
          </p>

          <p>
            Dacă vrei să ne ajuți mai mult, îți poți convinge apropiații,
            prietenii și colegii să ți se alăture. Fiecare ajutor contează!
            Adună cât mai multe formulare și scrie-ne la{" "}
            <a href="mailto:asociatia_rural21@yahoo.com">
              asociatia_rural21@yahoo.com
            </a>{" "}
            să le luăm noi de la tine.
          </p>

          <p>
            <strong>DESCARCĂ FORMULARELE DE MAI JOS:</strong>
            <br />
            Formularul 230 – Pentru persoane fizice cu venituri salariale
          </p>

          <p>
            <strong>DATELE NOASTRE DE IDENTIFICARE SUNT:</strong>
            <br />
            Asociația Rural21
            <br />
            Banca: Banca Transilvania
            <br />
            Cont IBAN: RO07BTRLRONCRT0623991801
          </p>
        </div> */}

        {/* 20% impozit & firme */}
        {/* <div className="donate-information mt-5">
          <h3>DONEAZĂ 20% DIN IMPOZITUL PE PROFIT</h3>
          <h4>
            SPONSORIZĂRI EFECTUATE DE CĂTRE PLĂTITORII DE IMPOZIT PE PROFIT
          </h4>
          <p>
            Modalitatea de a beneficia de facilitatea fiscală la plata
            impozitului pe profit este foarte simplă:
          </p>
          <ul>
            <li>
              Semnați un contract de sponsorizare cu un ONG înscris în Registrul
              entităților pentru care se acordă deduceri fiscale și virați către
              acesta suma dorită.
            </li>
            <li>
              Calculați suma reprezentând 20% din impozitul pe profit și suma
              reprezentând 0,75% din cifra de afaceri.
            </li>
            <li>
              Sponsorizarea acordată, limitată la valoarea cea mai mică dintre
              cele două sume calculate mai sus, se va deduce din impozitul pe
              profit datorat.
            </li>
          </ul>

          <h4>
            SPONSORIZĂRI EFECTUATE DE CĂTRE PLĂTITORII DE IMPOZIT PE VENIT
          </h4>
          <p>
            Microîntreprinderile care efectuează sponsorizări, potrivit legii,
            pentru susținerea organizațiilor non-profit și a unităților de cult
            înscrise în Registrul ANAF al entităților/unităților de cult pentru
            care se acordă deduceri fiscale pot beneficia de credit fiscal în
            cuantum de 20% din impozitul pe veniturile microîntreprinderilor
            datorat pentru trimestrul în care au efectuat sponsorizarea.
          </p>

          <h4>SPONSORIZĂRI EFECTUATE DE CĂTRE PERSOANELE FIZICE AUTORIZATE</h4>
          <p>
            De asemenea, și persoanele fizice autorizate pot acorda
            sponsorizări, cheltuiala cu sponsorizarea fiind deductibilă la
            calculul impozitului pe venit în limita a 5% din venitul net
            stabilit conform normelor fiscale.
          </p>
          <p>
            Decide chiar tu destinația banilor pe care oricum i-ai plăti către
            stat. Astfel de acțiuni înseamnă ajutor real pentru cei aflați în
            dificultate. Te invităm să consulți{" "}
            <a href="https://www.finexpert-boscolo.ro/storage/GZZ36TsiAIUFdNSjHE1zCme5v">
              aici
            </a>
            ghidul pentru a afla mai multe detalii despre aceste facilități
            fiscale aplicabile în zona acțiunilor de sponsorizare.
          </p>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Donate;
