import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useLanguage } from "../context/LanguageProvider";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="testimonials">
      <h3>{t.testimonials.title}</h3>
      <h2>{t.testimonials.subtitle}</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {t.testimonials.reviews.map((r) => (
          <SwiperSlide key={r.id}>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>{r.review}</p>
              <div className="testimonial-user">
                <img src={r.image} alt={r.name} />
                <h4>{r.name}</h4>
                <span>{r.role}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
