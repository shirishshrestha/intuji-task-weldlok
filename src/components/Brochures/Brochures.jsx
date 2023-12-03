import "./Brochures.css";
import { MdArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Keyboard, Scrollbar } from "swiper/modules";

const Brochures = () => {
  return (
    <>
      <section className="brochures">
        <div className="brochures__content">
          <div className="brochures__heading">
            <h3 className="main__heading">our brochures</h3>
            <h2 className="subheading">Explore and download our brochures</h2>
          </div>
          <div className="brochures__pdf">
            <div className="pdf__points">
              <img src="/images/pdf.svg" alt="pdf icon" />
              <span className="pdf__title">Mild Steel Diamond Grating</span>
            </div>
            <div className="pdf__points">
              <img src="/images/pdf.svg" alt="pdf icon" />
              <span className="pdf__title">Mild Steel Stair Treads</span>
            </div>
            <div className="pdf__points">
              <img src="/images/pdf.svg" alt="pdf icon" />
              <span className="pdf__title">Aluminium Stair Treads</span>
            </div>
            <div className="pdf__points">
              <img src="/images/pdf.svg" alt="pdf icon" />
              <span className="pdf__title">Mastermesh Expanded Metal</span>
            </div>
          </div>
          <button className="brochures__button">
            <MdArrowOutward />
            View All Brochures
          </button>
        </div>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          scrollbar={true}
          modules={[Keyboard, Scrollbar]}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          className="w-full"
        >
          <SwiperSlide className="w-[270px]">
            <div className="slider__content">
              <img src="/images/brochures-diamond.png" alt="diamond" />
              <span className="slider__content--heading">
                Mild Steel Diamond Grating
              </span>
              <button className="slider__content--button ">
                <MdArrowOutward />
                Download Now
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider__content">
              <img src="/images/brochures-diamond.png" alt="diamond" />
              <span className="slider__content--heading">
                Mild Steel Diamond Grating
              </span>
              <button className="slider__content--button">
                <MdArrowOutward />
                Download Now
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider__content">
              <img src="/images/brochures-diamond.png" alt="diamond" />
              <span className="slider__content--heading">
                Mild Steel Diamond Grating
              </span>
              <button className="slider__content--button">
                <MdArrowOutward />
                Download Now
              </button>
            </div>
          </SwiperSlide>
          <div className="swiper-scrollbar mt-20"></div>
        </Swiper>
      </section>
    </>
  );
};

export default Brochures;
