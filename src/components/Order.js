import React from 'react';
import { FaRegTrashCan } from 'react-icons/fa6'

export const Order = ({ item, onDelete }) => {
  return (
    <div className="item">
      <img src={"./img/" + item.img} />
      <h2>{item.title}</h2>
      <b>{item.price} BY</b>
      <FaRegTrashCan className='delete' onClick={() => onDelete(item.id)} />
    </div>
  )
}

export default Order;