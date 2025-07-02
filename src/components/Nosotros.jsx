import React from "react";
import '../Nosotros.css';
import anillo3 from "../images/anillo3.jpg";

function Nosotros() {
  return (
    <div className="contenedor-nosotros">

    <img className="nosotros-imagen" src= {anillo3} alt="" />

      <div className="nosotros-contenido">

      <h1 className="nosotros-titulo">Sobre Nosotros</h1>
      <p className="nosotros-p"> Somos una marca de joyería artesanal nacida del amor por los detalles, la elegancia y la autenticidad.</p>

    <div className="nosotros-texto"> 
     <p> Todas nuestras piezas están hechas con materiales seleccionados y diseñadas para acompañarte en tu día a día o en momentos especiales. Nos inspira lo simple, lo natural y lo eterno.</p>
     <p className="nosotros-linea" >𖦹 Gracias por confiar en nosotros.</p>
     </div>

     </div>
   
    </div>
  );
}

export default Nosotros;