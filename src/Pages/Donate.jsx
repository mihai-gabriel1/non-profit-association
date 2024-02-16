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
            <Link to="/persoana-juridica" className="router-link">
              <p>Mai multe informații</p>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 support-way">
            <img src={pfizica} className="support-img" alt="Juridic" />{" "}
            <p className="other-way-title">Persoanǎ fizicǎ</p>
            <p className="other-way-description">
              Redirecționează generos 3,5% din impozitul tău către susținerea
              celor aflați în nevoie.
            </p>
            <Link to="/persoana-fizica" className="router-link">
              <p>Mai multe informații</p>
            </Link>
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
            <Link to="/transfer-bancar" className="router-link">
              <p>Mai multe informații</p>
            </Link>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donate;
