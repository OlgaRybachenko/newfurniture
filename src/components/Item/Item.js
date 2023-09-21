import React from 'react';
const Item = ({ item, onShowItem, onAdd }) => {
  return (
    <div className='item'>
      <img src={'./img/' + item.img} onClick={() => onShowItem(item)} />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price} BY</b>
      <div className='add-to-cart' onClick={() => onAdd(item)}>+</div>
    </div>
  )
}

export default Item;