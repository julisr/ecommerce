import { useEffect } from "react";
import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "./firebase";


import anillo1 from "./images/anillo1.jpg";
import anillo2 from "./images/anillo2.jpg";
import collar1 from "./images/collar1.jpg";
import collar2 from "./images/collar2.jpg";
import aros1 from "./images/aros1.jpg";
import aros2 from "./images/aros2.jpg";


const productos = [
  {
    id: 1,
    title: "Anillo Minimalista Plata 925",
    description: "Anillo delicado de plata 925, ideal para uso diario.",
    price: 7500,
    image: anillo1,
    category: "anillos",
    quanty: 1


  },
  {
    id: 2,
    title: "Gargantilla con Dije",
    description: "Collar con cadena fina y dije, baño de oro.",
    price: 9800,
    image: collar1,
    category: "collares",
    quanty: 1
  },
  {
    id: 3,
    title: "Aros Tipo Argolla Oro Laminado",
    description: "Argollas medianas de oro laminado, cierre invisible.",
    price: 5600,
    image: aros1,
    category: "aros",
    quanty: 1
  },
  {
    id: 4,
    title: "Anillo con Piedra Natural",
    description: "Anillo con piedra natural, diseño artesanal.",
    price: 10200,
    image: anillo2,
    category: "anillos",
    quanty: 1
  },
  {
    id: 5,
    title: "Collar Perlas de Río",
    description: "Collar corto con perlas naturales y broche de acero quirúrgico.",
    price: 15400,
    image: collar2,
    category: "collares",
    quanty: 1
  },
  {
    id: 6,
    title: "Aros Estrellas",
    description: "Aritos pequeños con forma de estrella, hipoalergénicos.",
    price: 4800,
    image: aros2,
    category: "aros",
    quanty: 1
  }
];

function SubirProductos() {
  useEffect(() => {
    const exportToFirestore = async () => {
      const productsCollection = collection(db, "productos");

      for (let item of productos) {
        try {
          await setDoc(doc(productsCollection, `${item.id}`), item);
          console.log(`✅ Producto ${item.title} añadido con ID ${item.id}`);
        } catch (error) {
          console.error("❌ Error al subir el producto:", error);
        }
      }
    };

    exportToFirestore();
  }, []);

  return <div>Subiendo productos a Firebase...</div>;
}

export default SubirProductos;