import React, { useState } from 'react';
import ProductList from './ProductList';
import Basket from './Basket';
import './index.css';

export default function App() {
  const [basket, setBasket] = useState([]);

  const addItem    = p   => setBasket([...basket, p]);
  const removeItem = idx =>
    setBasket(basket.filter((_, i) => i !== idx));

  return (
    <div className="container">
      <ProductList onAdd={addItem} />
      <Basket items={basket} onRemove={removeItem} />
</div>
 );
}

