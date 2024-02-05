import g3 from "../assets/img/g3.jpg.webp";
import locationLogo from "../assets/logos/location.svg";
import phone from "../assets/logos/phone.svg";
import envelope from "../assets/logos/mail.svg";

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
              <div className="col lg-1 col-lg-2 col-md-6 col-sm-6 footer-quick-links">
                <p className="footer-small-title">Linkuri Utile</p>
                <ul className="footer-quick-list">
                  <li className="quick-link">
                    <a href="{{ url('/') }}" className="nav-link active">
                      Acasǎ
                    </a>
                  </li>
                  <li className="quick-link">
                    <a href="{{ route('about') }}" className="nav-link active">
                      Despre noi
                    </a>
                  </li>
                  <li className="quick-link">
                    <a
                      href="{{ route('projects') }}"
                      className="nav-link active"
                    >
                      Proiecte viitoare
                    </a>
                  </li>
                  <li className="quick-link">
                    <a
                      href="{{ route('blog.index') }}"
                      className="nav-link active"
                    >
                      Noutǎți
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="col-lg-3 col-md-6 col-sm-6">
                <p className="footer-small-title">Galerie</p>
                <ul className="footer-gallery-list d-flex flex-wrap">
                  <li>
                    <img src={g3} alt="" />
                  </li>
                  <li>
                    <img src={g3} alt="" />
                  </li>
                  <li>
                    <img src={g3} alt="" />
                  </li>
                  <li>
                    <img src={g3} alt="" />
                  </li>
                  <li>
                    <img src={g3} alt="" />
                  </li>
                  <li>
                    <img src={g3} alt="" />
                  </li>
                </ul>
              </div> */}
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

                <div className="footer-social-media">
                  <a
                    href="https://www.facebook.com/people/Asocia%C8%9Bia-Rural-21/100077523729031/"
                    target="_blank"
                    title="Facebook"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/people/Asocia%C8%9Bia-Rural-21/100077523729031/"
                    target="_blank"
                    title="Instagram"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://wa.me/0768867972"
                    target="_blank"
                    title="WhatsApp"
                    rel="noreferrer"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a
                    href="mailto:asociatia_rural21@yahoo.com"
                    target="_blank"
                    title="Email"
                    rel="noreferrer"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-social-media">
                  <a
                    href="https://www.facebook.com/people/Asocia%C8%9Bia-Rural-21/100077523729031/"
                    target="_blank"
                    title="Facebook"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/people/Asocia%C8%9Bia-Rural-21/100077523729031/"
                    target="_blank"
                    title="Instagram"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://wa.me/0768867972"
                    target="_blank"
                    title="WhatsApp"
                    rel="noreferrer"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a
                    href="mailto:asociatia_rural21@yahoo.com"
                    target="_blank"
                    title="Email"
                    rel="noreferrer"
                  >
                    <i className="fas fa-envelope"></i>
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
