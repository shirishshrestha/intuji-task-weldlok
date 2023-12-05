import "./Brochures.css";
import { MdArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

const Brochures = () => {
  return (
    <>
      <section className="brochures ">
        <div className="main__container relative brochures__container pr-0">
          <div className="brochures__content">
            <div className="brochures__content--heading">
              <h3 className="main__heading">Our brochures</h3>
              <h2 className="subheading">explore and download our brochures</h2>
            </div>
            <div className="brochures__pdf">
              <div className="pdf__points">
                <img src="/images/pdf.svg" alt="" />
                <span>Mild Steel Diamond Grating</span>
              </div>
              <div className="pdf__points">
                <img src="/images/pdf.svg" alt="" />
                <span>Mild Steel Stair Treads</span>
              </div>
              <div className="pdf__points">
                <img src="/images/pdf.svg" alt="" />
                <span>Aluminium Stair Treads</span>
              </div>
              <div className="pdf__points">
                <img src="/images/pdf.svg" alt="" />
                <span>Mastermesh Expanded Metal</span>
              </div>
            </div>
            <button className="brochures__button">
              <MdArrowOutward />
              View All Brochures
            </button>
          </div>
          <Swiper
            slidesPerView={2.5}
            spaceBetween={30}
            pagination={{
              type: "progressbar",
            }}
            modules={[Pagination]}
            className="brochures__swiper mySwiper w-full"
          >
            <SwiperSlide>
              <div className="brochures__swiper--container">
                <img src="/images/brochures-diamond.png" alt="swiper image" />
                <span className="swiper--container__title">
                  Mild Steel Diamond Grating
                </span>
                <button className="swiper--container__button">
                  <MdArrowOutward className="text-[1.5rem]" />
                  Download Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brochures__swiper--container">
                <img src="/images/brochures-diamond.png" alt="swiper image" />
                <span className="swiper--container__title">
                  Mild Steel Stairs Treads
                </span>
                <button className="swiper--container__button">
                  <MdArrowOutward className="text-[1.5rem]" />
                  Download Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brochures__swiper--container">
                <img src="/images/brochures-diamond.png" alt="swiper image" />
                <span className="swiper--container__title">
                  Aluminium Stair Treads
                </span>

                <button className="swiper--container__button">
                  <MdArrowOutward className="text-[1.5rem]" />
                  Download Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brochures__swiper--container">
                <img src="/images/brochures-diamond.png" alt="swiper image" />
                <span className="swiper--container__title">
                  Aluminium Stair Treads
                </span>
                <button className="swiper--container__button">
                  <MdArrowOutward className="text-[1.5rem]" />
                  Download Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brochures__swiper--container">
                <img src="/images/brochures-diamond.png" alt="swiper image" />
                <span className="swiper--container__title">
                  Aluminium Stair Treads
                </span>
                <button className="swiper--container__button">
                  <MdArrowOutward className="text-[1.5rem]" />
                  Download Now
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Brochures;
