import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Footer from "./Footer";
import Header from "./Header";

const Project3 = () => {
  return (
    <div className="project-wrapper">
      <Header />
      <div className="container project-content">
        <h1 className="text-center">Sănătate pentru fiecare</h1>
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
            {Array.from({ length: 5 }, (_, i) => (
              <SwiperSlide key={i}>
                <img
                  className="swiper-carousel-image"
                  src={`/images/medicalAction/med${i + 1}.jpeg`}
                  alt="Medical Action"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <p>
          <strong>Sănătate pentru fiecare</strong> este nu doar un slogan, ci o
          realitate pe care Asociația Rural 21, cu sprijinul inestimabil al
          Clinicii Sfântul Andrei Islaz, o face posibilă. Este un proiect care
          ne atinge inimile, datorită medicilor voluntari și asistentelor care,
          începând de vineri, 30 iunie 2023, au pus în mișcare acest vis nobil.
          Grație dedicării lor, dorința noastră de a oferi acces la servicii
          medicale gratuite sau la prețuri reduse persoanelor vulnerabile
          financiar începe să prindă contur. Este un pas uriaș în direcția
          egalității în sănătate, un domeniu atât de crucial pentru bunăstarea
          fiecăruia dintre noi.
        </p>

        <p>
          Implicarea și generozitatea acestor eroi în halate albe reprezintă
          coloana vertebrală a acestui proiect. Fiecare consultație oferită,
          fiecare sfat medical acordat aduce speranță și alinare celor care,
          până acum, poate nu au avut acces la îngrijirea de care aveau atât de
          multă nevoie. Este un memento puternic că, împreună, putem face
          diferența în viețile oamenilor, aducând un strop de lumină acolo unde
          situația părea fără speranță. Vă invităm să rămâneți alături de noi,
          pentru că fiecare gest contează, fiecare ajutor adus consolidează
          acest pod către o lume în care sănătatea este un drept, nu un
          privilegiu.
        </p>
        <p className="card-title">
          <Link to="/">Înapoi</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Project3;
