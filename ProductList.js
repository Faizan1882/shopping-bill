import React from 'react';
import { products } from './data';

export default function ProductList({ onAdd }) {
  return (
    <div className="panel">
      <h3>Products</h3>
      {products.map(p => (
        <div key={p.id} className="row">
          <span>{p.name}</span>
          <span>£ {p.price.toFixed(2)}</span>
          <button onClick={() => onAdd(p)}>Add</button>
        </div>
      ))}
</div>
);
}