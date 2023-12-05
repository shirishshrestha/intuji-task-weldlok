import "./CaseStudies.css";
import { MdArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CaseStudiesCards from "./CaseStudiesCards";

const CaseStudies = () => {
  return (
    <>
      <section className="casestudies">
        <div className="main__container casestudies__container">
          <div className="casestudies__top">
            <div className="casestudies__top--heading">
              <h3 className="main__heading">Case Studies</h3>
              <h2 className="subheading">Featured Project</h2>
            </div>
            <button className="casestudies__button">
              <MdArrowOutward />
              View All Case Studies
            </button>
          </div>
          <div className="casestudies__content">
            <Swiper
              pagination={true}
              spaceBetween={30}
              modules={[Pagination]}
              className=""
              style={{
                "--swiper-pagination-color": "#F80102",
                "--swiper-pagination-bullet-inactive-color":
                  " rgba(217, 217, 217, 0.20)",
                "--swiper-pagination-bullet-size": "14px",
                // "--swiper-pagination-bottom": "-6px",
              }}
            >
              <SwiperSlide className="pb-[70px]">
                <CaseStudiesCards />
              </SwiperSlide>
              <SwiperSlide>
                <CaseStudiesCards />
              </SwiperSlide>
              <SwiperSlide>
                <CaseStudiesCards />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
