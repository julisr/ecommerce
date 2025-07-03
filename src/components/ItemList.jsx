import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'; 
import { Context } from "../Context/Context";

const categories = {
  collares: "collares",
  aros: "aros",
  anillos: "anillos",
};

function ItemList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

  return (
    <div className="item-list-container">
      <div className="category-buttons">
        <button className="button" onClick={() => setSelectedCategory(categories.collares)}>Collares</button>
        <button className="button" onClick={() => setSelectedCategory(categories.aros)}>Aros</button>
        <button className="button" onClick={() => setSelectedCategory(categories.anillos)}>Anillos</button>
        <button className="button" onClick={() => setSelectedCategory("")}>Todos</button>
      </div>

      <div className="contenedor-items">
        {filteredItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

function Item({ id, title, price, image }) {
  const { buyProducts } = useContext(Context);

  const product = { id, title, price, image };

  const handleBuy = (e) => {
    e.preventDefault(); 
    buyProducts(product);
  };

  return (
    <Link to={`/productos/${id}`} className="card">
      <img className="imagen-item" src={image} alt={title} />
      <div className="texto-item">
        <p>{title}</p>
        <p>${price}</p>

        <button onClick={handleBuy} className="boton-item">+</button>
      </div>
    </Link>
  );
}

export default ItemList;