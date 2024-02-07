// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import development from "../assets/img/development.avif";
import growth from "../assets/img/growing-plant.avif";
import Header from "./Header";
import Aboutus from "./Aboutus";
import Footer from "./Footer";
import Joinus from "./Joinus";
import Team from "./Team";
import lavinia1 from "/images/lavinia/lavinia1.jpg";
import eco6 from "/images/eco/eco6.jpeg";
import med from "/images/medicalAction/med5.jpeg";
import cloth from "../assets/img/cloth.webp";

export const Welcome = () => {
  return (
    <div className="welcome-wrapper">
      <Header />
      <Aboutus />
      <div className="our-causes container">
        <p className="our-causes section-title">Cauzele dupa care ne ghidǎm</p>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="single-cause-div">
              <p className="single-cause-title">Dezoltare Comunitarǎ</p>
              <img src={development} alt="Growth" />
              <p className="single-cause-description">
                Ne dedicăm evoluției satelor Islaz și Moldoveni, susținând
                proiecte care aduc îmbunătățiri directe în viața comunității.
                Prin unirea forțelor, facem pasul către un viitor mai prosper
                pentru toți locuitorii.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="single-cause-div">
              <p className="single-cause-title">Protecția Mediului</p>
              <img src={growth} alt="Growth" />
              <p className="single-cause-description">
                Luptăm pentru un mediu curat și sănătos, implementând soluții
                pentru reducerea poluării. Responsabilitatea față de natură este
                esențială pentru noi, iar acțiunile noastre sunt gândite pentru
                a proteja și a păstra frumusețea naturală a regiunii.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="finished-projects container">
        <p className="section-title finished-projects">Proiecte finalizate</p>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <div className="card-body">
                <figure>
                  <img src={lavinia1} alt="lavinia and her family" />
                </figure>
                <div className="card_inner_body">
                  <p className="card-title">
                    <Link to="/project1">Cazul Laviniei</Link>
                  </p>
                  <p className="card-text">
                    Lavinia, o fetiță din comunitatea noastră, a trecut de la
                    condiții dificile la un viitor promițător, cu acces la
                    educație și un cămin stabil, datorită sprijinului vostru
                    generos. Mulțumim tuturor pentru ajutorul esențial acordat
                    Laviniei și familiei ei, reflectând puterea solidarității
                    noastre în a schimba vieți.
                  </p>
                </div>
                <Link className="project-read-more" to="/project1">
                  Citeşte mai mult
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <div className="card-body">
                <figure>
                  <img src={eco6} alt="eco action" />
                </figure>
                <div className="card_inner_body">
                  <p className="card-title">
                    <Link to="/project2">
                      Efort comunitar pentru un mediu mai curat
                    </Link>
                  </p>
                  <p className="card-text">
                    Împreună cu colegii noștri de la{" "}
                    <strong>#asociatiarural21</strong> și colaboratorii de la{" "}
                    <strong>#cuapelecurate</strong> și{" "}
                    <strong>#cleandanube</strong>, am reușit să tragem un semnal
                    de alarmă și să conștientizăm prin acțiunile noastre de
                    astăzi de la Plaja Pod Olt și Gura Oltului din comuna Islaz
                    TR.
                  </p>
                </div>
                <Link className="project-read-more" to="/project2">
                  Citeşte mai mult
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <div className="card-body">
                <figure>
                  <img src={med} alt="lavinia and her family" />
                </figure>
                <div className="card_inner_body">
                  <p className="card-title">
                    <Link to="/project3">Sānātate pentru toti</Link>
                  </p>
                  <p className="card-text">
                    <strong>Sănătate pentru fiecare</strong> este nu doar un
                    slogan, ci o realitate pe care Asociația Rural 21, cu
                    sprijinul Clinicii Sfântul Andrei Islaz, o face posibilă.
                    Este un proiect care ne atinge inimile, datorită medicilor
                    voluntari și asistentelor care, începând de vineri, 30 iunie
                    2023, au pus în mișcare acest vis nobil.
                  </p>
                </div>
                <Link className="project-read-more" to="/project3">
                  Citeşte mai mult
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p className="see-more-posts text-center mt-2">
          Apasa <a href="#">aici</a> pentru o lista complete cu activitatile
          derulate de catre noi.
        </p>
      </div>
      <div className="future-projects container">
        <p className="section-title future-title">Proiecte viitoare</p>
        <div className="row">
          <div className="col-lg-6">
            <div className="single_event">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <figure>
                    <img src={cloth} alt="cloth" />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="content-wrapper">
                    <p className="future-post-title">
                      Apǎ potabilǎ in zonele greu accesibile
                    </p>
                    <p className="future-post-p">
                      Furnizarea si/sau transportarea de apa potabila in zonele
                      greu accesibile, varstnicilor sau persoanelor cu
                      dificultati de deplasare.
                    </p>
                    <a href="#" className="find-more">
                      Aflǎ mai multe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single_event">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <figure>
                    <img src={cloth} alt="cloth" />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="content-wrapper">
                    <p className="future-post-title">
                      Apǎ potabilǎ in zonele greu accesibile
                    </p>
                    <p className="future-post-p">
                      Furnizarea si/sau transportarea de apa potabila in zonele
                      greu accesibile, varstnicilor sau persoanelor cu
                      dificultati de deplasare.
                    </p>
                    <a href="#" className="find-more">
                      Aflǎ mai multe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single_event">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <figure>
                    <img src={cloth} alt="cloth" />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="content-wrapper">
                    <p className="future-post-title">
                      Apǎ potabilǎ in zonele greu accesibile
                    </p>
                    <p className="future-post-p">
                      Furnizarea si/sau transportarea de apa potabila in zonele
                      greu accesibile, varstnicilor sau persoanelor cu
                      dificultati de deplasare.
                    </p>
                    <a href="#" className="find-more">
                      Aflǎ mai multe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single_event">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <figure>
                    <img src={cloth} alt="cloth" />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="content-wrapper">
                    <p className="future-post-title">
                      Apǎ potabilǎ in zonele greu accesibile
                    </p>
                    <p className="future-post-p">
                      Furnizarea si/sau transportarea de apa potabila in zonele
                      greu accesibile, varstnicilor sau persoanelor cu
                      dificultati de deplasare.
                    </p>
                    <a href="#" className="find-more">
                      Aflǎ mai multe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Team />
      <Joinus />
      <Footer />
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default Welcome;
