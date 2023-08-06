import React from 'react';
import a from "../../Images/oficina.jpg"
import b from "../../Images/modelo.jpg"
import c from "../../Images/lv.jpg"
import "../../CSS/productos.css"
// import "../../CSS/slider.css"
import "../../CSS/style.css"

const Carrusel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="99999999">
          <img src={a} className="d-block w-100" alt="img1" />
        </div>

        <div className="carousel-item" data-bs-interval="999999">
          <img src={b}  className="d-block w-100" alt="img2" />
        </div>

        <div className="carousel-item" data-bs-interval="999999">
          <img src={c} className="d-block w-100" alt="img3" />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrusel;
