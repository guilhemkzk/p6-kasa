import { useState } from "react";

function Slider(currentLogement) {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {};

  const prevSlide = () => {};

  const slides = currentLogement.currentLogement.pictures.map((picture) => (
    <img
      key={currentLogement.id + "_picture" + picture}
      src={picture}
      className="slide"
      alt={currentLogement.title + "image"}
    />
  ));

  return slides;
}

export default Slider;
