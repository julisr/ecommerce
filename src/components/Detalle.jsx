import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Context } from "../Context/Context";
import { useContext, useEffect, useState } from "react";
import '../App.css';
import '../Detalle.css';
import Error from "./Error.jsx";

function Detalle() {
  const { id } = useParams();
  const { buyProducts } = useContext(Context);
  const navigate = useNavigate();

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProducto({ ...docSnap.data(), id: docSnap.id });
        } else {
          setProducto(null); 
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [id]);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (!producto) {
    return <Error />;
  }

  const handleBuy = () => {
    const agregarProducto = { ...producto, quanty: 1 };
    buyProducts(agregarProducto);
    navigate("/carrito");
  };

  return (
    <div className="contenedor-detalle">
      <h2 className="detalle-titulo">Detalles del producto</h2>

      <div className="detalle-contenido">
       <img className="detalle-imagen" src={producto.image} alt={producto.title} />

        <div className="detalle-info">
          <h3 className="detalle-item">{producto.title}</h3>
          <p className="detalle-desc">{producto.description}</p>
          <p className="precio-detalle">Precio: ${producto.price}</p>
          <button className="detalle-boton" onClick={handleBuy}>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detalle;