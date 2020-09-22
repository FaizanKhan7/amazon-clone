import React from "react";
import "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function CarouselTop() {
  return (
    <div className="carousel">
      <Carousel showThumbs={false} autoPlay={true}>
        <div>
          <img
            src={require("../../Assets/sports-wear-sale.jpg")}
            alt="sports-wear-sale"
          />
        </div>
        <div>
          <img
            src={require("../../Assets/tech-computers.jpg")}
            alt="tech-computers"
          />
        </div>
        <div>
          <img src={require("../../Assets/beauty.jpg")} alt="beauty-creams" />
        </div>
        <div>
          <img src={require("../../Assets/furniture.jpg")} alt="furniture" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselTop;
