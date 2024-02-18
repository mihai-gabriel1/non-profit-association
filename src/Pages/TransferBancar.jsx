import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

const TransferBancar = () => {
  return (
    <div className="transfer-bancar-overall-wrapper">
      <Header />
      <div className="transfer-bancar-section container pb-3">
        <h2 className="text-center mt-3">Doneazǎ prin transfer bancar</h2>
        <h4 className="mt-3">Datele noastre de identificare sunt:</h4>
        <p>Nume: Asociația Rural21</p>
        <p>Banca: Banca Transilvania</p>
        <p>Cont IBAN: RO07BTRLRONCRT0623991801</p>

        <Link to="/donate" className="router-link back-to-donations">
          <a>Inapoi la metodele de donare</a>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default TransferBancar;
