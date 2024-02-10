// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Footer from "./Footer";
import Header from "./Header";

const Project1 = () => {
  const laviniaImages = [
    "/images/lavinia/lavinia1.jpg",
    "/images/lavinia/lavinia2.jpeg",
    "/images/lavinia/lavinia3.jpeg",
    "/images/lavinia/lavinia4.jpeg",
    "/images/lavinia/lavinia5.jpeg",
    "/images/lavinia/lavinia6.jpeg",
  ];

  return (
    <div className="project-wrapper">
      <Header />
      <div className="container project-content">
        <h1 className="text-center">Cazul Laviniei</h1>
        <div className="case-photos mb-5">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            navigation
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {laviniaImages.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  className="swiper-carousel-image"
                  src={src}
                  alt={`Lavinia ${index + 1}`}
                />
              </SwiperSlide>
            ))}
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

        <div className="project-video-content">
          <p>
            Mai jos vǎ ataşǎm un videoclip cu Lavinia, un suflet pur, un copil
            frumos.
          </p>
          <ReactPlayer
            className="lavinia-clip"
            url="/videos/laviniaclip.mp4"
            controls
            width="50%"
            height="400px"
          />
        </div>
        <p className="card-title">
          <Link to="/">Înapoi</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Project1;
