import "./Testimonials.css";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <>
      <section className="testimonials">
        <div className="main__container testimonials_container">
          <div className="testimonials__description">
            <div className="testimonials__description--left">
              <h2 className="main__heading">Testimonials</h2>
              <h3 className="subheading">Your Feedback Drives Us Forward</h3>
              <div className="testimonials__para">
                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam,
                </p>
              </div>
            </div>
            <Swiper
              spaceBetween={40}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper w-full"
              style={{
                "--swiper-navigation-opacity": "0",
              }}
            >
              <SwiperSlide className="text-black">
                <TestimonialsCard />
              </SwiperSlide>
              <SwiperSlide className="text-black">
                <TestimonialsCard />
              </SwiperSlide>
              <SwiperSlide className="text-black">
                <TestimonialsCard />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="testimonials__request">
            <h3 className="testimonials__request--heading">
              Elevate Your Infrastructure
              <p>with our Premium Solutions!</p>
            </h3>
            <button className="testimonials__request--button">
              <MdArrowOutward />
              Request A Quote
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
