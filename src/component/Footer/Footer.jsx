import React from 'react';
import aa from "../../CSS/bootstrap.min.css"
import "../../CSS/productos.css"
// import "../../CSS/slider.css"
import "../../CSS/style.css"

const Footer = () => {
  return (
    <footer className="w-100 d-flex align-item-center justify-content-center flex-wrap">
<link rel="stylesheet" href={aa} />
        
      <p className="fs-5 px-3 pt-3"> Todos los derechos &copy; reservado por "Fred Zuti" AND "The coffee gang" ✅</p>
      <div id="iconos">
        <a href="https://www.twitter.com/tutialfred" target="_blank_" rel="noopener noreferrer">
          <i className="bi bi-twitter text-info"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank_" rel="noopener noreferrer">
          <i className="bi bi-facebook text-primary"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank_" rel="noopener noreferrer">
          <i className="bi bi-instagram text-black"></i>
        </a>
        <a href="https://www.youtube.com/channel/UC_amn4L722sLDr2f1RLvGQQ" target="_blank_" rel="noopener noreferrer">
          <i className="bi bi-youtube text-danger"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
