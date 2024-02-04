// eslint-disable-next-line no-unused-vars
import React from "react";

const Welcome = () => {
  return (
    <div>
      <div className="our-causes container">
        <p className="our-causes section-title">Cauzele dupa care ne ghidǎm</p>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-cause-div">
              <p className="single-cause-title">Dezoltare Comunitarǎ</p>
              <img
                src="{{ asset('assets/img/development.png') }}"
                alt="Growth"
              />
              <p className="single-cause-description">
                Ne dedicăm evoluției satelor Islaz și Moldoveni, susținând
                proiecte care aduc îmbunătățiri directe în viața comunității.
                Prin unirea forțelor, facem pasul către un viitor mai prosper
                pentru toți locuitorii.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-cause-div">
              <p className="single-cause-title">Protecția Mediului</p>
              <img
                src="{{ asset('assets/img/environment.jpeg') }}"
                alt="Growth"
              />
              <p className="single-cause-description">
                Luptăm pentru un mediu curat și sănătos, implementând soluții
                pentru reducerea poluării. Responsabilitatea față de natură este
                esențială pentru noi, iar acțiunile noastre sunt gândite pentru
                a proteja și a păstra frumusețea naturală a regiunii.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-cause-div">
              <p className="single-cause-title">Tradiții și Turism</p>
              <img src="{{ asset('assets/img/turism.jpeg') }}" alt="Growth" />
              <p className="single-cause-description">
                Valorificăm tradițiile locale și promovăm satul Islaz ca
                destinație turistică de neuitat. Cultura și istoria bogată sunt
                reflectate în evenimentele noastre, atrăgând vizitatori și
                susținând economia locală.
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
                  <img
                    className="card-img-top img-fluid"
                    src="{{ asset('assets/img/education.webp') }}"
                    alt="Growth"
                  />
                </figure>
                <div className="card_inner_body">
                  <p className="card-title">
                    Educația este un drept fundamental
                  </p>
                  <p className="card-text">
                    Incercǎm sa asigurǎm tutoror copiilor din Islaz si Moldoveni
                    mijloacele necesare pentru a merge la scoala, cat si
                    rechizitele necesare, alaturi de alte materiale.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <div className="card-body">
                <figure>
                  <img
                    className="card-img-top img-fluid"
                    src="{{ asset('assets/img/hungry.webp') }}"
                    alt="Growth"
                  />
                </figure>
                <div className="card_inner_body">
                  <p className="card-title">
                    Asigurǎm haine si alimente celor nevoiaşi
                  </p>
                  <p className="card-text">
                    Am strâns si am donat atât haine cat si alimente persoanelor
                    la nevoie din Islaz si Moldoveni.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <div className="card-body">
                <figure>
                  <img
                    className="card-img-top img-fluid"
                    src="{{ asset('assets/img/cloth.webp') }}"
                    alt="Growth"
                  />
                </figure>
                <div className="card_inner_body">
                  <p className="card-title">
                    Educația este un drept fundamental
                  </p>
                  <p className="card-text">
                    Incercǎm sa asigurǎm tutoror copiilor din Islaz si Moldoveni
                    mijloacele necesare pentru a merge la scoala, cat si
                    rechizitele necesare, alaturi de alte materiale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="see-more-posts text-center">
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
                    <img
                      className="card-img-top img-fluid"
                      src="{{ asset('assets/img/water.webp') }}"
                      alt="Growth"
                    />
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
                    <img
                      className="card-img-top img-fluid"
                      src="{{ asset('assets/img/water.webp') }}"
                      alt="Growth"
                    />
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
                    <img
                      className="card-img-top img-fluid"
                      src="{{ asset('assets/img/water.webp') }}"
                      alt="Growth"
                    />
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
                    <img
                      className="card-img-top img-fluid"
                      src="{{ asset('assets/img/water.webp') }}"
                      alt="Growth"
                    />
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
      <script src="{{ asset('js/owl.carousel.min.js') }}"></script>
    </div>
  );
};

export default Welcome;
