import {useContext } from "react"
import { Context } from "../../Context/Context"
import CartElements from "./CartElements"
import CartTotal from "./CartTotal"


import './CartElements.css'

const CartContent = () => {
  const {cart} = useContext(Context)
  return (
    <>
    {cart.length > 0 ? (
        <>
          <CartElements />
          <CartTotal />
        </>
      ) : (
        <h2 className='cart-vacio'>Tu carrito está vacío</h2>
      )}
    </>
  )
}

export default CartContent