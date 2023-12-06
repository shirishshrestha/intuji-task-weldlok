import React from "react";

const TestimonialsCard = () => {
  return (
    <>
      <div className="testimonials__description--right">
        <div className="testimonials--right__para"> 
          <p>
            "I have been a customer of Weldlok for over 5 years now, in this
            time I have been nothing but pleased with the service and quality.
            Weldlok always goes above and beyond my expectations."
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
    </>
  );
};

export default TestimonialsCard;
