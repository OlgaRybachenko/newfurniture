import React from "react";

const Categories = ({ chooseCategory }) => {
  const categories = [
    {
      key: 'all',
      name: 'Все'
    },
    {
      key: 'chairs',
      name: 'Стулья'
    },
    {
      key: 'tables',
      name: 'Столы'
    },
    {
      key: 'sofa',
      name: 'Диваны'
    },
    {
      key: 'beds',
      name: 'Кровати'
    },
    {
      key: 'dressers',
      name: 'Комоды'
    }
  ];

  return (
    <div className='categories'>
      {categories.map(el => (
        <div key={el.key} onClick={() => chooseCategory(el.key)}>{el.name}</div>
      ))}
    </div>
  )
}

export default Categories;