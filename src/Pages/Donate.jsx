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
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

        <div className="container donation-widget-wrapper">
          <div className="donation-widget">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 donate-col">
                <p className="donate-amount-title"></p>
                <stripe-buy-button
                  buy-button-id="buy_btn_1OlHd7GbteexYB5NcXMrVQCz"
                  publishable-key="pk_live_51OjLlqGbteexYB5N35uVNCoZ8eqWA4lIWv0ysJQ0Vo5gKQpHsrKevAognTewpZM1NLuXeYQUVzEgwytPMxPRcCqc00ArlXrMjO"
                ></stripe-buy-button>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 donate-col">
                <p className="donate-amount-title"></p>
                <stripe-buy-button
                  buy-button-id="buy_btn_1OlHqWGbteexYB5NAtZlyYmB"
                  publishable-key="pk_live_51OjLlqGbteexYB5N35uVNCoZ8eqWA4lIWv0ysJQ0Vo5gKQpHsrKevAognTewpZM1NLuXeYQUVzEgwytPMxPRcCqc00ArlXrMjO"
                ></stripe-buy-button>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 donate-col">
                <stripe-buy-button
                  buy-button-id="buy_btn_1OlHyUGbteexYB5NAvwh9tWh"
                  publishable-key="pk_live_51OjLlqGbteexYB5N35uVNCoZ8eqWA4lIWv0ysJQ0Vo5gKQpHsrKevAognTewpZM1NLuXeYQUVzEgwytPMxPRcCqc00ArlXrMjO"
                ></stripe-buy-button>
              </div>
            </div>
          </div>
        </div>

        <p className="other-ways-to-help text-center">Cum mai poți ajuta</p>

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
