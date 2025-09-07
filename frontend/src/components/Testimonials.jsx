import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sheikh Musafir",
      role: "Contractor",
      image: "mm2.jpg",
      review:
        "We recently partnered with SAASA for our construction project, and the experience was outstanding. Their team demonstrated exceptional professionalism, attention to detail, and commitment to quality. From planning to execution.",
    },
    {
      id: 2,
      name: "Hamdan khan",
      role: "Business Man",
      image: "mm3.jpeg",
      review:
        "The entire process was seamless. The quality of work delivered exceeded our expectations and timelines were met without compromise.",
    },
    {
      id: 3,
      name: "Rabi khan",
      role: "Business Man",
      image: "mm4.jpeg",
      review:
        "A fantastic experience working with this team. Their dedication and craftsmanship made our project a success.",
    },
    {
      id: 3,
      name: "Shazim khan",
      role: "Business Man",
      image: "mm5.jpg",
      review:
        "A fantastic experience working with this team. Their dedication and craftsmanship made our project a success.",
    },
  ];

  return (
    <section className="testimonials">
      <h3>TESTIMONIALS</h3>
      <h2>What our clients say</h2>

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
        {reviews.map((r) => (
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
