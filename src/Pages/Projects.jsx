import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import lavinia1 from "/images/lavinia/lavinia1.jpg";
import eco6 from "/images/eco/eco6.jpeg";
import med from "/images/medicalAction/med5.jpeg";

const Projects = () => {
  return (
    <div className="projects-section-wrapper">
      <Header />
      <div className="container">
        <h2 className="text-center mb-4 mt-3">
          O parte din proiectele asociației noastre
        </h2>
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
                      <strong>#cleandanube</strong>, am reușit să tragem un
                      semnal de alarmă și să conștientizăm prin acțiunile
                      noastre de astăzi de la Plaja Pod Olt și Gura Oltului din
                      comuna Islaz TR.
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
                      voluntari și asistentelor care din iunie 2023, au pus în
                      mișcare acest vis nobil.
                    </p>
                  </div>
                  <Link className="project-read-more" to="/project3">
                    Citeşte mai mult
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
