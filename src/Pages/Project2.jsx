// eslint-disable-next-line no-unused-vars
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Footer from "./Footer";
import Header from "./Header";

const Project2 = () => {
  return (
    <div className="project-wrapper">
      <Header />
      <div className="container project-content">
        <h1 className="text-center">
          Efort comunitar pentru un mediu mai curat
        </h1>
        <div className="case-photos mb-5">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            navigation
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {Array.from({ length: 12 }, (_, i) => (
              <SwiperSlide key={i}>
                <img
                  className="swiper-carousel-image"
                  src={`/images/eco/eco${i + 1}.jpeg`}
                  alt="Ecologic Action"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <p>
          Împreună cu colegii noștri de la <strong>#asociatiarural21</strong> și
          colaboratorii de la <strong>#cuapelecurate</strong> și{" "}
          <strong>#cleandanube</strong>, am reușit să tragem un semnal de alarmă
          și să conștientizăm prin acțiunile noastre de astăzi de la Plaja Pod
          Olt și Gura Oltului din comuna Islaz TR. Este un memento că oricine nu
          respectă un standard minim de colectare a deșeurilor pune în pericol
          ecosistemul, cu posibile daune mult mai devreme decât ne-am putea
          imagina. Un mulțumesc uriaș tuturor participanților, în special
          tinerilor promițători care s-au alăturat nouă. Entuziasmul și
          angajamentul vostru au fost remarcabile, și a fost inspirator să vedem
          atât de mulți oameni dedicați adunați pentru o cauză comună.
        </p>

        <p>
          Suntem de asemenea profund recunoscători Primăriei Islaz pentru
          sprijinul acordat în colectarea zecilor de saci de gunoi adunați
          astăzi. Acest eveniment de curățenie nu doar că a ajutat la
          înfrumusețarea zonei, dar a avut și un impact pozitiv semnificativ
          asupra mediului local. Îndepărtarea deșeurilor din aceste spații
          naturale previne pătrunderea poluanților în căile noastre de apă și
          vătămarea faunei sălbatice, asigurând un ecosistem mai sănătos pentru
          generațiile viitoare. Efortul colectiv depus astăzi nu doar că a
          evidențiat dedicarea comunității noastre pentru conservarea mediului,
          dar a subliniat și puterea acțiunii colective în realizarea unor
          schimbări palpabile.
        </p>
        <p className="card-title">
          <Link to="/">Înapoi</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Project2;
