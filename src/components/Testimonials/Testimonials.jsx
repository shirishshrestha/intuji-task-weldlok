import "./Testimonials.css";
import { MdArrowOutward } from "react-icons/md";

const Testimonials = () => {
  return (
    <>
      <section className="testimonials">
        <section className="testimonials__description">
          <h2 className="main__heading">Testimonials</h2>
          <h3 className="subheading">Your Feedback Drives Us Forward</h3>
          <div className="testimonials__para">
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam,
            </p>
          </div>
        </section>
        <section className="testimonials__request">
          <h3 className="testimonials__request--heading">
            Elevate Your Infrastructure <span>with our Premium Solutions!</span>
          </h3>
          <button className="testimonials__request--button">
            <MdArrowOutward />
            Request A Quote
          </button>
        </section>
      </section>
    </>
  );
};

export default Testimonials;
