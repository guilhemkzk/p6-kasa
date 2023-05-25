import FicheLogement from "../pages/FicheLogement";

function GoPrev(counter, arraySlides) {
  counter--;
  if (counter < 0) {
    counter = arraySlides.length - 1;
  }
  if (counter > arraySlides.length - 1) {
    counter = 0;
  }
  const slideImage = () => {
    arraySlides.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  };

  return <FicheLogement goPrev={slideImage()} />;
}

export default GoPrev;
