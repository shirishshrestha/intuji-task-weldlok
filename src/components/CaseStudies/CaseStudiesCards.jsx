import React from "react";
import { MdArrowOutward } from "react-icons/md";

const CaseStudiesCards = () => {
  return (
    <>
      <figure className="casestudies__slider">
        <img
          src="/images/casestudies-image.png"
          alt="image"
          className="casestudies__image"
        />
        <figcaption className="slider__description">
          <h3 className="slider__heading">
            Central Taiwan Innovation & Research Park
          </h3>
          <div className="slider__description--details">
            <div className="details__content">
              <span className=" w-[92px] max-[500px]:w-[75px]">Location:</span>
              <div className="option__details">
                <p>Nantou, Taiwan</p>
              </div>
            </div>
            <div className="details__content">
              <span className="option w-[100px] max-[850px]:w-[135px]">
                Client:
              </span>
              <div className="option__details">
                <p>Central Taiwan Innovation & Research Park</p>
              </div>
            </div>
          </div>
          <div className="slider__description--para">
            <p>
              Bio-architecture Formosana, an architectural firm known for their
              commitment to eco-friendly buildings, achieved the highest grade
              of Taiwan’s green building label with project.
            </p>
          </div>
          <button className="slider__description--btn">
            <MdArrowOutward />
            Read Full Case Study
          </button>
        </figcaption>
      </figure>
    </>
  );
};

export default CaseStudiesCards;
