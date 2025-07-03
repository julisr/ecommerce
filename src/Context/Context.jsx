import { createContext, useState } from "react";
import { toast } from 'react-toastify';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

 const buyProducts = (product, showToast = true) => {
  const productRepeat = cart.find((item) => item.id === product.id);

  if (productRepeat) {
    if (productRepeat.quanty < 5) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quanty: item.quanty + 1 }
            : item
        )
      );

      if (showToast) {
        toast.success("Producto añadido al carrito 🛒", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          theme: "light",
        });
      }

    } else {
      toast.warn("Máximo 5 unidades por producto 🥲", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        theme: "light",
      });
    }
  } else {
    setCart([...cart, { ...product, quanty: 1 }]);

    if (showToast) {
      toast.success("Producto añadido al carrito 🛒", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        theme: "light",
      });
    }
  }
};


  return (
    <Context.Provider value={{ cart, setCart, buyProducts }}>
      {children}
    </Context.Provider>
  );
};