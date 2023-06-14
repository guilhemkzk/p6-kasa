import NextBtn from "./NextBtn";
import PreviousBtn from "./PreviousBtn";

import { useState } from "react";

function Slider(slides) {
  const justSlides = slides.slides;

  const [current, setCurrent] = useState(0);
  const length = justSlides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(justSlides) || justSlides.length <= 0) {
    return null;
  }

  return (
    <div className="container-slider">
      {justSlides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide} alt="Slide Caroussel" className="slider-image" />
            )}
          </div>
        );
      })}

      <div className="nav">
        <div className="nav-prev-btn" onClick={prevSlide}>
          {length > 1 ? <PreviousBtn /> : null}
        </div>
        {length > 1 ? (
          <span className="slider-counter" key={current + "_count"}>
            {current + 1}/{length}
          </span>
        ) : null}
        <div className="nav-next-btn" onClick={nextSlide}>
          {length > 1 ? <NextBtn /> : null}
        </div>
      </div>
    </div>
  );
}

export default Slider;
