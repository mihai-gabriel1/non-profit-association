import { Link } from "react-router-dom";
import locationLogo from "../assets/logos/location.svg";
import phone from "../assets/logos/phone.svg";
import envelope from "../assets/logos/mail.svg";
import facebook from "../assets/logos/facebook.svg";
import insta from "../assets/logos/insta.svg";
import whatsup from "../assets/logos/whatsup.svg";
import gmail from "../assets/logos/gmail.svg";

const Footer = () => {
  return (
    <div>
      <div id="footer" className="footer">
        <div className="big-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="footer-left-mission">
                  <p className="footer-title section-title">Misiunea noastrǎ</p>
                  <p className="footer-mission-p">
                    Asociația Rural 21 se dedica susținerii celor în nevoie din
                    Islaz și Moldoveni, oferind nu doar ajutor material, ci și
                    programe educative care îmbrățișează tradițiile și inovația.
                  </p>
                  <p className="footer-mission-p">
                    Asociația Rural 21 își asumă misiunea de a iniția și de a
                    conduce proiecte inovatoare ce vizează progresul și
                    prosperitatea comunităților din Islaz și Moldoveni.
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 footer-quick-links">
                <p className="footer-small-title">Linkuri Utile</p>
                <ul className="footer-quick-list">
                  <li className="quick-link">
                    <Link to="/" className="router-link">
                      <p>Acasǎ</p>
                    </Link>
                  </li>
                  <li className="quick-link">
                    <Link to="/aboutus" className="router-link">
                      <p>Despre noi</p>
                    </Link>
                  </li>
                  <li className="quick-link">
                    <Link to="/projects" className="router-link">
                      <p>Proiecte</p>
                    </Link>
                  </li>
                  <li className="quick-link">
                    <Link to="/aboutus" className="router-link">
                      <p>Noutǎți</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 footer-contact-us">
                <p className="footer-small-title">Contacteazǎ-ne</p>
                <div className="d-flex align-items-center footer-address-wrapper">
                  <img src={locationLogo} alt="location logo" />
                  <div className="footer-address-wrapper footer-details-wrapper">
                    <p>46, Islaz, Teleorman, Romania</p>
                  </div>
                </div>
                <div className="d-flex align-items-center footer-address-wrapper">
                  <img src={phone} alt="phone logo" />
                  <div className="footer-phone-wrapper footer-details-wrapper">
                    <p>
                      <a
                        href="https://wa.me/+40768867972"
                        target="_blank"
                        rel="noreferrer"
                      >
                        +40 768 867 972
                      </a>
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center footer-address-wrapper">
                  <img src={envelope} alt="envelope logo" />
                  <div className="footer-email-wrapper footer-details-wrapper">
                    <p>
                      <a href="mailto:asociatia_rural21@yahoo.com">
                        asociatia_rural21@yahoo.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 footer-social-media-col">
                <p className="text-center footer-small-title">Social Media</p>
                <div className="footer-social-media">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/people/Asocia%C8%9Bia-Rural-21/100077523729031/"
                    rel="noreferrer"
                  >
                    <img src={facebook} alt="social media logo" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/people/Asocia%C8%9Bia-Rural-21/100077523729031/"
                    rel="noreferrer"
                  >
                    <img src={insta} alt="social media logo" />
                  </a>
                  <a
                    href="https://wa.me/0768867972"
                    target="_blank"
                    title="WhatsApp"
                    rel="noreferrer"
                  >
                    <img src={whatsup} alt="social media logo" />
                  </a>
                  <a
                    href="mailto:asociatia_rural21@yahoo.com"
                    target="_blank"
                    title="Email"
                    rel="noreferrer"
                  >
                    <img src={gmail} alt="social media logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
