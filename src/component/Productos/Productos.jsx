import React from 'react';
import a from "../../Images/t-shirt Black.png"
import b from "../../Images/PANTALON2.jpg"
import c from "../../Images/ADIDAS PANTS.PNG"
import d from "../../Images/ADIDAS.PNG"
import aa from "../../CSS/bootstrap.min.css"

const Productos = () => {
  return (
      <section className="container-fluid">
        <link rel="stylesheet" href={aa} />
      <div className="row w-75 mx-auto servicio-fila">
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex my-5 icono-wrap">
          <img src={a} alt="IMG" width="180" height="160" />
          <div>
            <h3 className="fs-5 mt-4 px-4 pb-1">Wolf black</h3> 
            <p className="px-4">
              Modelo clásico para el entrenamiento, ya sea solo o como líder en tu equipo. Saca todo el potencial con la
              comodidad y la facha de la sencillez
            </p>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 d-flex my-5 icono-wrap">
          <img src={b} alt="IMG" width="180" height="160" />
          <div>
            <h3 className="fs-5 mt-4 px-4 pb-1">Pants White Snow</h3>
            <p className="px-4">
              Un producto pensado para la claridad donde tu objetivo solo es correr transmitiendo energía e inspirar a
              quien te vea. Remarcando el espíritu
            </p>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 d-flex my-5 icono-wrap">
          <img src={c} alt="IMG" width="180" height="160" />
          <div>
            <h3 className="fs-5 mt-4 px-4 pb-1">Adidas & MGT</h3>
            <p className="px-4">
              La gran unión de dos potencias hace un producto increíble. Donde nadie lo hubiera imaginado, donde la
              sencillez, la elegancia y la calidad pueden sentirse a centímetros de ponerte el pantalón
            </p>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 d-flex my-5 icono-wrap">
          <img src={d} alt="IMG" width="180" height="160" />
          <div>
            <h3 className="fs-5 mt-4 px-4 pb-1">Adidas</h3>
            <p className="px-4">
              Mano a mano, acompañamos y ayudamos a nuestros socios la posibilidad de que te encuentres con los mejores
              productos como nosotros confiamos y conocemos sus productos, también queremos que lleguen a tus manos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productos;
