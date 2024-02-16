import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

const PersoanaJuridica = () => {
  return (
    <div className="transfer-bancar-overall-wrapper">
      <Header />
      <div className="transfer-bancar-section container pb-3">
        <div className="donate-information mt-5">
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
        </div>
        <Link to="/donate" className="router-link back-to-donations">
          <a>Inapoi la metodele de donare</a>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default PersoanaJuridica;
