import "./Testimonials.css";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

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
              <div className="testimonials__description--button flex gap-[1rem]">
                <FaArrowLeft className="w-[2.375rem] h-[2.375rem] p-[0.44rem] bg-[#F80102] cursor-pointer" />
                <FaArrowRight className="w-[2.375rem] h-[2.375rem] p-[0.44rem]  bg-[#F80102] cursor-pointer" />
              </div>
            </div>
            <div className="testimonials__description--right">
              <div className="testimonials--right__para">
                <p>
                  "I have been a customer of Weldlok for over 5 years now, in
                  this time I have been nothing but pleased with the service and
                  quality. Weldlok always goes above and beyond my expectations.
                </p>
              </div>
              <div className="testimonials--right__person">
                <img src="/images/testimonials-image.png" alt="person" />
                <div className="person__name">
                  <span>PAUL MIRABITO</span>
                  <span>Murray Engineering</span>
                </div>
              </div>
            </div>
          </div>
          <section className="testimonials__request">
            <h3 className="testimonials__request--heading">
              Elevate Your Infrastructure
              <p>with our Premium Solutions!</p>
            </h3>
            <button className="testimonials__request--button">
              <MdArrowOutward />
              Request A Quote
            </button>
          </section>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
