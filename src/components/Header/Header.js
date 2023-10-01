import { FaCartPlus } from "react-icons/fa6";
import { Order } from '../Order';
import React, { useState } from 'react';
import './Header.css';



const showOrders = ( orders, onDelete ) => {
  let summa = 0;
  orders.forEach(el => summa += Number.parseFloat(el.price))
  return (
    <div>
      {orders.map(el => (
        <Order onDelete={onDelete} key={el.id} item={el} />
      ))}
      <p className='summa'>Общая сумма: {new Intl.NumberFormat().format(summa)} BY</p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Товаров нет</h2>
    </div>
  )
}

export const Header = ({ orders, onDelete }) => {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
        <FaCartPlus onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
        {cartOpen && (
          <div className='shop-cart'>
            {orders && orders.length > 0 ?
              showOrders(orders, onDelete) : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}


export default Header ;