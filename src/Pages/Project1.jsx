import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Footer from "./Footer";
import Header from "./Header";

const Project1 = () => {
  return (
    <div>
      <Header />
      <div className="container project-content">
        <h1 className="text-center">Cazul Laviniei</h1>
        <div className="case-photos mb-5">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={4}
            navigation
            autoplay={{
              delay: 200,
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
            <SwiperSlide>
              <img
                className="swiper-carousel-image"
                src="/images/lavinia/lavinia1.jpg"
                alt="Lavinia 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="swiper-carousel-image"
                src="/images/lavinia/lavinia2.jpeg"
                alt="Lavinia 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="swiper-carousel-image"
                src="/images/lavinia/lavinia3.jpeg"
                alt="Lavinia 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="swiper-carousel-image"
                src="/images/lavinia/lavinia4.jpeg"
                alt="Lavinia 4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="swiper-carousel-image"
                src="/images/lavinia/lavinia5.jpeg"
                alt="Lavinia 5"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="swiper-carousel-image"
                src="/images/lavinia/lavinia6.jpeg"
                alt="Lavinia 6"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <p>
          Salutare dragilor! Vă prezentam în urmă cu o lună cazul Laviniei, o
          fetiță nevinovată, aflată într-o situație dificilă, marginalizată
          social, fără un acoperiș deasupra capului și fără acces la utilități
          de bază în locuința precară unde își petrecea copilăria. Situația ei
          era complicată și de lipsa documentelor oficiale, ceea ce îi îngreuna
          și mai mult accesul la serviciile sociale necesare.
        </p>

        <p>
          Astăzi, grație generozității și implicării unor oameni cu inimă mare,
          situația familiei Laviniei s-a schimbat radical. Tatăl ei a reușit să
          obțină un loc de muncă stabil, toți membrii familiei au acum acte de
          identitate, iar Lavinia a avut bucuria de a merge pentru prima dată la
          școală, la Școala Generală nr. 1 din Islaz. Se află acum în clasa
          întâi și este extrem de entuziasmată de noile ei descoperiri și de
          oportunitatea de a învăța. Emoția și zâmbetul ei ne-au umplut inimile
          de fericire, reamintindu-ne cât de mult poate conta sprijinul
          comunității pentru a schimba vieți. Vă mulțumim din suflet tuturor
          celor care ați contribuit la această minunată transformare și vă
          asigurăm că bucuria și recunoștința Laviniei și a familiei sale sunt
          nemăsurabile.
        </p>
        <div className="project-video-content">
          <p>
            Mai jos vǎ ataşǎm un videoclip cu Lavinia, un suflet pur, un copil
            frumos.
          </p>
          <ReactPlayer
            url="/videos/lavinia/lavinia.mp4"
            controls
            width="50%"
            height="400px"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project1;
