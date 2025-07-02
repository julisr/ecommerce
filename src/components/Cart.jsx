import { useCart } from "./CartContext/CartContext";

const Cart = () => {
    const {carrito, actualizarCantidad, eliminarDelCarrito} = useCart();
    const handleAumentarCantidad = (itemId) => {
        actualizarCantidad(itemId, 1);
    }

    const handleDisminuirCantidad = (itemId) => {
       const item = carrito.find(item => item.id === itemId);
       if (item.cantidad > 1) {
        actualizarCantidad(itemId, -1);
       }
    }


    return(
        <div className="cart-container">
            <h2>Tu <span>carrito</span></h2>

            {carrito.lenght === 0 ? (
          <p>Tu carrito está vacío</p> 
            ):(
                <>
            <div className="cart-header">
                <p>Producto</p>
                <p>Precio</p>
                <p>Cantidad</p>
                <p>Total</p>
                <p>Acción</p>
            </div>

            <ul className="cart-items">
                {
                    carrito.map((item) => {
                        return(
                        <li key={item.id} className="cart-item">
                            <div className="product-info">
                                <img src={item.image} alt={item.title} className="product-images" />
                                 <span>{item.title}</span>
                            </div>
                            
                            <p>${item.price.toFixed(2)}</p>

                            <div className="quantity-controls">
                            <button className="quantity-button"
                                onClick={() => handleDisminuirCantidad(item.id)}
                                >
                                    -
                            </button>

                                <button className="quantity-button"
                                onClick={() => handleAumentarCantidad(item.id)}
                                >
                                     +
                                    </button>
                                 <input type="number" className="quantity-input"
                                 readOnly
                                 value={item.cantidad} 
                                 />   
                            </div>

                            <p>$0</p>
                            <button className="delete-btn"
                            onClick={() => eliminarDelCarrito(item.id)}
                            >
                                <i className="fas fa-trash"></i>


                            </button>
                           
                        </li>
                        )
                   
                })

}
            </ul>
            
            
            
            </>
            )
            
        }
        </div>
    )
}