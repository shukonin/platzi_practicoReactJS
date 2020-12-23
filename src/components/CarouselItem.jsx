import React from "react";

import "../assets/styles/components/CarouselItem.scss";

const CarouselItem = () => {
  return (
    <div className="caorusel-item">
      <img className="carousel-item__img" src="https://images." alt="item" />
      <div className="carousel-item__details">
        <div>
          <img src="" alt="play icon" className="carousel-item__details--img" />
          <img src="" alt="play icon" className="carousel-item__details--img" />
        </div>
      </div>
      <p className="carousel-item__details--title">Título</p>
      <p className="carousel-item__details--subtitle">2019 16+ 114minutos</p>
    </div>
  );
};

export default CarouselItem;
