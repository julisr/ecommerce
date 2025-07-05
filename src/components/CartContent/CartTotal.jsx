import {useContext } from "react"
import { Context } from "../../Context/Context"

const CartTotal = () => {
    const {cart} = useContext(Context)

    const total = cart.reduce((acc, item) => acc + item.price * item.quanty, 0 )
  return (
    <div className="cart-total">
        <h3>total a pagar: {total}</h3>
        <button>Pagar</button>
    </div>

   

  )
}

export default CartTotal