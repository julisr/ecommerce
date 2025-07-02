import {useContext } from "react"
import { Context } from "../../Context/Context"
import CartItemCounter from "./CartItemCounter"

const CartElements = () => {
    const {cart, setCart} = useContext(Context)

    const deleteProducts = (id) => {
        const foundId = cart.find((element) => element.id === id)

        const newCart = cart.filter((element) => {
            return element !== foundId
        })

        setCart(newCart)
    }



    return cart.map((item) => {
        return (
            <div className="contenedor" key={item.id}>
                <img  className="cart-imagen" src={item.image} alt={item.title}/>
                <h3>{item.title}</h3>
                <CartItemCounter product={item}/>
                <h4>{item.price * item.quanty}</h4>

                <button className="cart-delete" onClick={() => deleteProducts(item.id)}>

                    X

                </button>
                
            </div>
          )
    })

}

export default CartElements