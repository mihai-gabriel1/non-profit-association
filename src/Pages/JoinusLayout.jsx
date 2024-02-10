// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const JoinusLayout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement what should happen on form submit
    console.log("Form submitted");
  };

  return (
    <div className="joinus-layout-wrapper">
      <Header />
      <div className="container joinus-layout-container">
        <div className="join-us-component">
          <div className="joinus-forms-wrapper container">
            <h2 className="join-us-section-title text-center">
              Hai in echipa noastrǎ
            </h2>

            <div className="membership-information">
              <p>
                Membru al Asociației Rural 21 poate fi orice persoană fizică,
                indiferent de naționalitate, sex, religie, origine etnică, dar
                și persoane juridice care aderă la scopul și principiile
                Asociației noastre și doresc să participe, indiferent de
                mijloace, la realizarea obiectivelor acesteia.
              </p>

              <p>
                Calitatea de membru poate fi dobândită pe baza unei cereri
                scrise tipizate (cererea de adeziune) adresată Consiliului
                Director, cu aprobarea Adunării Generale a asociației.
              </p>

              <p>
                Descarcă aici: <a href="#">Cererea de adeziune</a> /{" "}
                <a href="#">Formular de afiliere</a>
              </p>

              <p>
                Transmiteți cererea de adeziune/formularul de afiliere semnată
                și scanată la adresa de email:{" "}
                <a href="mailto:asociatia_rural21@yahoo.com">
                  asociatia_rural21@yahoo.com
                </a>
                .
              </p>

              <p>
                După analizarea cererii dumneavoastră veți fi invitat la o
                întâlnire pentru a ne cunoaște, pentru a descoperi așteptările
                pe care le aveți de la noi și care va fi implicarea
                dumneavoastră la îndeplinirea obiectivelor Asociației.
              </p>

              <p>
                Ca urmare a celor mai sus menționate, Consiliul Director va
                aproba adeziunea dumneavoastră și vi se va comunica hotărârea în
                scris sau telefonic și vi se va solicita achitarea taxei de
                înscriere (a se vedea mai jos), copie după BI/CI și o fotografie
                tip buletin (în format electronic) în vederea finalizării
                procedurii.
              </p>

              <h3>TAXE ȘI COTIZAȚII*:</h3>
              <ul>
                <li>
                  Costurile pentru obținerea calității de membru/membru afiliat
                  sunt:
                </li>
                <li>
                  Cotizația anuală pentru persoane fizice cu venit: 150 Lei
                </li>
                <li>Cotizația anuală pentru persoane juridice: 500 Lei</li>
                <li>
                  Cotizația anuală pentru persoane fizice care sunt elevi și
                  studenți: 50 Lei
                </li>
              </ul>
              <p>
                * Taxele și cotizațiile pot fi modificate de Consiliul Director
                fără notificare prealabilă pe site-ul nostru.
              </p>

              <p>
                Totodatǎ, puteți accesa pagina dedicatǎ redirecționǎrii
                impozitului pe venit, cǎtre asociația noastrǎ, accesând
                urmǎtorul{" "}
                <Link to="/donate" className="router-link" target="_blank">
                  link
                </Link>
                .{" "}
              </p>

              <p>
                Pentru a afla mai multe informații și detalii despre modalitatea
                de înscriere în Rural21 ne puteți scrie la adresa de email:{" "}
                <a href="mailto:asociatia_rural21@yahoo.com">
                  asociatia_rural21@yahoo.com
                </a>
              </p>
            </div>

            <section className="mb-4">
              <div className="row">
                <div className="col-md-9 mb-md-0 mb-5">
                  <form
                    id="contact-form"
                    name="contact-form"
                    onSubmit={handleSubmit}
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value="contact-form"
                    />

                    <div className="row">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                          />
                          <label htmlFor="name">Numele tǎu:</label>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="email"
                            name="email"
                            className="form-control"
                          />
                          <label htmlFor="email">Adresa de e-mail:</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="form-control"
                          />
                          <label htmlFor="subject">Subiect</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="md-form">
                          <textarea
                            id="message"
                            name="message"
                            rows="2"
                            className="form-control md-textarea"
                          ></textarea>
                          <label htmlFor="message">Mesajul tǎu:</label>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div className="text-center text-md-left">
                    <button type="submit" className="btn btn-primary">
                      Trimite
                    </button>
                  </div>
                </div>

                <div className="col-md-3 text-center"></div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JoinusLayout;
