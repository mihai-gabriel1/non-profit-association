import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Team = () => {
  return (
    <div data-aos="fade-in" data-aos-duration="1000">
      <div className="team-area-wrapper">
        <div className="team-area container" />
        <p className="section-title team-title">Hai sa facem cunoştințǎ</p>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {[
            {
              src: "/team/raul.jpeg",
              name: "Raul Gheorghina",
              title: "Preşedinte",
            },
            { src: "/team/ali.jpeg", name: "Ali Cranta", title: "Membru" },
            {
              src: "/team/valentin.jpeg",
              name: "Valentin Uba",
              title: "Membru",
            },
            {
              src: "/team/cornelia.jpeg",
              name: "Cornelia Popescu",
              title: "Membru",
            },
            {
              src: "/team/cristina.jpeg",
              name: "Cristina Gabriela",
              title: "Membru",
            },
            { src: "/team/dana.jpeg", name: "Dana Iordan", title: "Membru" },
            {
              src: "/team/nineta.jpeg",
              name: "Nineta Cranta",
              title: "Membru",
            },
            {
              src: "/team/adelina.jpeg",
              name: "Adelina Naidin",
              title: "Voluntar",
            },
            { src: "/team/luiza.jpeg", name: "Luiza Ciucu", title: "Voluntar" },
          ].map((member, index) => (
            <SwiperSlide key={index}>
              <div className="team_item">
                <div className="team_img">
                  <img
                    className="card-img-top img-fluid"
                    src={member.src}
                    alt={member.name}
                  />
                </div>
                <div className="team_name">
                  <p className="team-member-name">{member.name}</p>
                  <p className="team-member-title">{member.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
