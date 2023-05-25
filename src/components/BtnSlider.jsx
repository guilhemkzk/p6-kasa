import React from "react";
import prevNav from "../assets/images/prev.png";
import nextNav from "../assets/images/next.png";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <img
      className={direction === "next" ? "nav-btn next" : "nav-btn prev"}
      onClick={console.log(moveSlide)}
      src={direction === "next" ? nextNav : prevNav}
    />
  );
}
