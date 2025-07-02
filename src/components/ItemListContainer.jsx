import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productsCollection = collection(db, "productos");
        const querySnapshot = await getDocs(productsCollection);
        const docs = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setItems(docs);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
}

export default ItemListContainer;