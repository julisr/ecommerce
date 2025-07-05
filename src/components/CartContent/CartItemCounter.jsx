import { useContext } from "react";
import { Context } from "../../Context/Context";
import "./CartElements.css";

const CartItemCounter = ({ product }) => {
  const { cart, setCart, buyProducts } = useContext(Context);

  const decrese = () => {
    const productrepeat = cart.find((item) => item.id === product.id);

    productrepeat.quanty !== 1 &&
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, quanty: productrepeat.quanty - 1 }
            : item
        )
      );
  };

  return (
    <>
      <p className="cart-counter" onClick={decrese}>-</p>
      <p>{product.quanty}</p>
     <p
  className={`cart-counter ${product.quanty >= 5 ? "disabled" : ""}`}
  onClick={() => buyProducts(product, false)} 
>
  +
</p>
    </>
  );
};

export default CartItemCounter;