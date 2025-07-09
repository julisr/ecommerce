import React from "react";
import '../Home.css';
import collar4 from "../images/collar4.jpg";
import fondo from "../images/fondo4.jpg";
import collar5 from "../images/collar5.jpg";

function Home() {
    return (

<div>   

<div className="contenedor-home"> 

        <div className="mitad-izq"> 
        <img className="home-fondo" src={fondo} alt="Fondo" />
        <img className="home-imagen" src= {collar4} alt="" />
        </div>

        <div className="mitad-der">

            <div className="home-texto"> 
            <h1 className="home-titulo">Joyas con alma.</h1>
            <p className="home-p">Creaciones artesanales inspiradas en la belleza de lo simple. Diseños atemporales, materiales nobles y detalles cuidados que convierten cada joya en un reflejo de tu esencia.</p>
          
            <p className="home-pa">Descubrí nuestra nueva colección.</p>
            </div>
       
        </div>

         </div>

<div className="home-container"> 

    <div className="home-texto2"> 

    <p>En nuestro taller combinamos diseño consciente con materiales seleccionados con responsabilidad. Cada pieza es elaborada a mano en pequeñas cantidades, priorizando la calidad sobre la producción en masa.</p>
    <p>Creemos en un consumo más lento, más humano y más conectado con lo que llevás puesto. Por eso, cada joya que creamos no solo embellece, sino que también cuida del planeta.</p>
    <p className="home-li">By Julieta</p>

</div>

 <img className="home-imagen2" src= {collar5} alt="" />

</div>

         


   </div>




      
    );
}

export default Home;