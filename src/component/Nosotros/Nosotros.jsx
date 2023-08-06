import React from 'react';
import a from "../../Images/slider/leftarrow.svg"
import e from "../../Images/slider/rightarrow.svg"
import b from "../../Images/tuti.png"
import d from "../../Images/leonel.jfif"

const Nosotros = () => {
  return (
    <section>
      <div id="equipo" className="w-75 m-auto text-center">
        <h1 className="mb-5 fs-2" id="teams">
          Equipo de emprendedores con una <br />
          <span className="text-primary">Gran visión en las personas y del mañana</span>
        </h1>
        <p className="fs-4">
          Somos un pequeño grupo o cohorte de personas en cual necesitamos y queremos brindar y poder ayudar a la mayor
          cantidad de personas en poder lograr la satisfacción de poder vestir bien y con calidad a su gusto y
          necesidad. Estamos para poder acompañarte en tu camino del éxito
        </p>
      </div>

      <section className="testimony">
        <div className="testimony__container container">
          <img src={a} className="testimony__arrow" id="before" />

          <section className="testimony__body testimony__body--show" data-id="1">
            <div className="testimony__texts">
              <h2 className="subtitle">
                Mi nombre es Oscar Zavala, <span className="testimony__course">Programmer</span>
              </h2>
              <p className="testimony__review">
                Nacido en Argentina "Tuti" de 20 años comenzó su carrera como profesional acompañado por sus colegas
                siempre para brindar mejores ideas y funciones al negocio tanto en la cafetería para su creatividad para
                sus outfits de los <b>Privileged</b>
              </p>
            </div>
            {/* TUTI ZAVALA */}
            <figure className="testimony__picture">
              <img src={b} className="testimony__img" />
            </figure>
          </section>
          {/* LEONEL */}
          <section className="testimony__body" data-id="2">
            <div className="testimony__texts">
              <h2 className="subtitle">
                Mi nombre es Leonel Aguilera , <span className="testimony__course">estudiante de Henry.</span>
              </h2>
              <p className="testimony__review">
                Soy una persona que a veces fuma marihuana y hace deporte en el año 2022 empecé con la programación y el
                buen camino. Porque soy un niño de 15 años
              </p>
            </div>

            <figure className="testimony__picture">
              <img src={d} className="testimony__img" />
            </figure>
          </section>

          <img src={e} className="testimony__arrow" id="next" />
        </div>
      </section>

      <div id="local" className="border-top border-3 mt-4">
        <div className="mapa"></div>
        <div>
          <div className="wrapper">
            <h2>Ubicado en Mendoza, Argentina</h2>
            <h2 className="text-primary mb-4" id="typewriter"></h2>
            <p className="fs-5 text-body">
              Decidimos empezar por donde todo comenzó, nuestras inspiraciones siempre fueron donde nos criamos
            </p>

            <section className="d-flex" id="numeros-local">
              {/* . */}
              <div>
                <p className="text-primary fs-5">248</p>
                <p>días de sol</p>
              </div>
              {/* . */}
              <div>
                <p className="text-primary fs-5">100%</p>
                <p>Aprobado</p>
              </div>
              {/* . */}
              <div>
                <p className="text-primary fs-5">22'C </p>
                <p>Temperatura</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
