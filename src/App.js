import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Items } from './components/Items/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

const App = () => {
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const items = [
    {
      id: 1,
      title: 'Стул cерый',
      img: 'f2.jpg',
      desc: 'Стул кухонный AksHome Sky - это стильное и функциональное решение для вашего интерьера. ',
      category: 'chairs',
      price: '104'
    },
    {  
      id: 2,
      title: 'Стул Mоншау',
      img: 'f3.jpg',
      desc: 'Стул на металлокаркасе Моншау станет настоящим украшением интерьера в стиле модерн или лофта. Благодаря четырем металлическим ножкам модель устойчива, надежна и не смотрится громоздко, а мягкая велюровая обивка делает посадку комфортной. Особенность дизайна стула – полукруглая низкая спинка, переходящая в подлокотники и декорированная изящными складками.',
      category: 'chairs',
      price: '315'
    },
      {
        id: 3,
        title: 'Стул AksHome Darren',
        img: 'f4.jpg',
        desc: 'Кухонный стул AksHome Darren - это идеальное решение для создания комфортного и стильного интерьера вашей кухни.',
        category: 'chairs',
        price: '188'
      },
      {
        id: 4,
        title: 'Стул AksHome Orly (велюр)',
        img: 'f5.jpg',
        desc: 'АksHome Orly (велюр) - это элегантный кухонный стул, который будет отлично смотреться в любом интерьере. ',
        category: 'chairs',
        price: '257'
      },
      {
        id: 5,
        title: 'Стул UTFC ИЗО BL',
        img: 'f6.jpg',
        desc: 'Офисное кресло UTFC ИЗО BL - это удобное и надежное решение для вашего рабочего пространства.',
        category: 'chairs',
        price: '66'
      },
      {
        id: 6,
        title: 'Темный стул кухонный',
        img: 'f18.jpg',
        desc: 'Кухонный стул Signal MN-SC (темный орех) - это надежное и элегантное решение для вашей кухни.',
        category: 'chairs',
        price: '360'
      },
      {
        id: 7,
        title: 'Стoл обеденный',
        img: 'f7.webp',
        desc: 'Стол обеденный Валенсия круг 1100 (Стекло с фотопечатью Белый мрамор / МДФ Белый шагрень / рама золото / металл золото)',
        category: 'tables',
        price: '2003.50'
      },
      {
        id: 8,
        title: 'МАНИКЮРНЫЙ СТОЛ',
        img: 'f8.webp',
        desc: 'Современная модификация маникюрного стола МС-120 в стиле лофт.',
        category: 'tables',
        price: '340'
      },
      {
        id: 9,
        title: 'Письменный стoл',
        img: 'f9.jpeg',
        desc: 'Письменный стол Горизонт Мебель Анталия 1200 3 ящика (дуб сонома/графит софт)',
        category: 'tables',
        price: '196.28'
      },
      {
        id: 10,
        title: 'Журнальный стoл',
        img: 'f10.jpeg',
        desc: 'Журнальный столик Горизонт Мебель Квадро (белый/дуб золотой)',
        category: 'tables',
        price: '59.01'
      },
      {
        id: 11,
        title: 'Журнальный стол Джексон Белый',
        img: 'f17.jpg',
        desc: 'Kлассический, скандинавский, минимализм, прованс, современный, лофт, модерн, кантри',
        category: 'tables',
        price: '363'
      },
      {
        id: 12,
        title: 'Обеденный стол Мебель-Класс Гелиос ',
        img: 'f19.webp',
        desc: 'Ножки раздвижного обеденного стола Мебель-Класс Гелиос изготавливаются из массива ольхи. Столешница изготавливается из МДФ и облицовывается двумя слоями шпона дуба.',
        category: 'tables',
        price: '629.37'
      },
      {
        id: 13,
        title: 'Диван угловой Порту Textile Silver',
        img: 'f11.jpg',
        desc: 'Строгий образ дивана «Порту» станет завершающим штрихом в современном интерьере гостиной. Остается только расставить цветовые акценты, дополнив однотонную обивку контрастными декоративными подушками.',
        category: 'sofa',
        price: '1344'
      },
      {
        id: 14,
        title: 'Бонс-Т',
        img: 'f12.jpg',
        desc: 'Однотонная обивка, отсутствие броского декора, лаконичная конструкция: диван «Бонс-Т» – образец минималистичного стиля. Одновременно, благодаря отделке строчкой и стяжками, модель выглядит очень уютно.',
        category: 'sofa',
        price: '1330'
      },
      {
        id: 15,
        title: 'Диван Райтт 4 BMS',
        img: 'f13.jpg',
        desc: 'Диван Райтт 4 BMS – это уютное ретро для интерьеров в стиле мид сенчури. Двухместный диванчик выполнен в мягкой обивке насыщенного цвета с декоративными пуговицами, плавные линии подлокотников подчеркнуты контрастным кантом в тон подушкам. Устойчивая благодаря ножкам древесных тонов, модель оборудована удобным глубоким сиденьем, высокой спинкой и боковинами с кармашками для ТВ пульта. Купить диван Райтт 4 BMS приглашаем в наш интернет-магазин, подобрав гармонирующий с  интерьером вариант обивки.',
        category: 'sofa',
        price: '1157'
      },
      {
        id: 16,
        title: 'Диван Порту Textile Grafit',
        img: 'f14.jpg',
        desc: 'Дизайн модели чрезвычайно прост. Ничего лишнего – только правильные прямоугольные формы и симметричные линии. Несмотря на отсутствие броского декора, диван смотрится элегантно и очень стильно.',
        category: 'sofa',
        price: '1052'
      },
      {
        id: 17,
        title: 'Диван Атланта BMS',
        img: 'f15.jpg',
        desc: '"Стильный диван Атланта, прямой, с надежным механизмом трансформации «еврокнижка» предназначен для ежедневного использования. Гармоничный вид украсит любой интерьер, сделает атмосферу теплой и уютной. Аппетитный цвет сливок красиво контрастирует с насыщенным цветом натурального дерева, который выбран для накладок подлокотников из МДФ и вставкой из темной экокожи, проходящей по низу. Модель оснащена ящиком для постельных принадлежностей.',
        category: 'sofa',
        price: '1565'
      },
      {
        id: 18,
        title: 'Диван Тилар Textile Beige',
        img: 'f16.jpg',
        desc: 'Обратите внимание: на опорах, изготовленных из сращенного массива, допускается сочетание разных оттенков древесины. Сращенный массив более долговечен и устойчив к температурным перепадам и влажности, чем цельный.',
        category: 'sofa',
        price: '1064'
      },
      {
        id: 19,
        title: 'Кровать Скандинавия 2 BMS',
        img: 'f20.jpg',
        desc: 'Двуспальная кровать Скандинавия 2 BMS понравится владельцам классических интерьеров. Выполненная в натуральном теплом оттенке под массив дерева, модель выглядит стильно и респектабельно. ',
        category: 'beds',
        price: '619'
      },
      {
        id: 20,
        title: 'Двуспальная кровать',
        img: 'f21.jpeg',
        desc: 'Двуспальная кровать ФорестДекоГрупп Луиза 180x200 (орех)',
        category: 'beds',
        price: '699.30'
      },
      {
        id: 21,
        title: 'Двуспальная кровать',
        img: 'f22.jpeg',
        desc: 'Двуспальная кровать Горизонт Мебель Юнона 1.6м (венге/дуб)',
        category: 'beds',
        price: '179'
      },
      {
        id: 22,
        title: 'Кровать',
        img: 'f23.webp',
        desc: 'Кровать КР-1003 160х200 (Снежный Ясень)',
        category: 'beds',
        price: '1081.50'
      },
      {
        id: 23,
        title: 'Кровать',
        img: 'f24.webp',
        desc: 'Кровать Сити с подъемным механизмом (Latte) 120х200',
        category: 'beds',
        price: '1134.50'
      },
      {
        id: 24,
        title: 'Двуспальная кровать',
        img: 'f25.jpeg',
        desc: 'Двуспальная кровать Гомельдрев ГМ 8421 160x200 Дуб (P-43)',
        category: 'beds',
        price: '975.24'
      },
      {
        id: 25,
        title: 'Комод',
        img: 'f26.jpeg',
        desc: 'Комод Гомельдрев ГМ 8425 Дуб (P-43)',
        category: 'dressers',
        price: '552.42'
      },
      {
        id: 26,
        title: 'Комод',
        img: 'f27.jpeg',
        desc: 'Комод ФорестДекоГрупп Луиза (орех)',
        category: 'dressers',
        price: '468.46'
      },
      {
        id: 27,
        title: 'Комод',
        img: 'f28.jpeg',
        desc: 'Комод ФорестДекоГрупп Луиза (слоновая кость)',
        category: 'dressers',
        price: '453.60'
      },
      {
        id: 28,
        title: 'Комод',
        img: 'f29.jpg',
        desc: 'Распашной шкаф Нордик-3 Light',
        category: 'dressers',
        price: '850'
      },
      {
        id: 29,
        title: 'Комод Дания 33 BMS',
        img: 'f30.jpg',
        desc: 'Комод Дания 33 BMS – это широкая низкая модель для функциональных и визуально легких интерьеров в скандинавском стиле. Комод с корпусом под массив дерева и глянцевым фрезерованным фасадом оборудован высокими устойчивыми ножками. ',
        category: 'dressers',
        price: '573'
      },
      {
        id: 30,
        title: 'Комод МБ 61.1 BMS',
        img: 'f31.jpg',
        desc: 'Комод МБ 61.1 BMS отличается элегантным и эргономичным современным дизайном. Яркая глянцевая модель, выполненная в сочетании древесных оттенков и цветных вставок, оборудована тремя выдвижными ящиками для одежды и постельного белья. ',
        category: 'dressers',
        price: '534'
      },
    ]
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

  const addToOrder = item => {
    let isInArray = false;
    orders.forEach(el => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) setOrders([...orders, item]);
  };

  const deleteOrder = id => {
    setOrders(orders.filter(el => el.id !== id));
  };

  const chooseCategory = category => {
    if (category === 'all') {
      setCurrentItems(items);
      return;
    }
    setCurrentItems(currentItems.filter(el => el.category === category));
  };

  const onShowItem = item => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  };

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder} />
      {showFullItem && <ShowFullItem onAdd={addToOrder} onShowItem={onShowItem} item={fullItem} />}          
      <Footer />
    </div>
  );
}
export default App;
