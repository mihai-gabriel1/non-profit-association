import { Link } from "react-router-dom";

const Joinus = () => {
  return (
    <div>
      <div
        className="home-become-volunteer-wrapper"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <div className="become-volunteer container">
          <p className="volunteer-title">Alǎturǎ-te echipei noastre</p>
          <p className="volunteer-text">
            Alătură-te Asociației Rural 21 și contribuie la dezvoltarea
            comunităților Islaz și Moldoveni. Haide să construim un viitor mai
            bun, impreunǎ!
          </p>
          <Link to="/joinus" className="router-link volunteer-join-us">
            <p>Sǎ trecem la treabǎ!</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
