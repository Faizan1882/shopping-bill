import React from 'react';
import { calcSubtotal, calcOffers } from './utils';

export default function Basket({ items, onRemove }) {
  const subtotal = calcSubtotal(items);
  const { activeOffers, totalSaving } = calcOffers(items);
  const total = subtotal - totalSaving;

  return (
    <div className="panel">
      <h3>Basket</h3>

      {items.length === 0 && <p>(empty)</p>}

      {items.map((p, idx) => (
        <div key={idx} className="row">
          <span>{p.name}</span>
          <span>£ {p.price.toFixed(2)}</span>
          <button onClick={() => onRemove(idx)}>🗑</button>
        </div>
      ))}

      <hr />

      <div className="totals">
        <div>Sub-Total:</div>
        <div>£ {subtotal.toFixed(2)}</div>
      </div>

      {activeOffers.map(o => (
        <div key={o.description} className="totals saving">
          <div>{o.description}</div>
          <div>- £ {o.saving.toFixed(2)}</div>
        </div>
      ))}

      <div className="totals total">
        <div>Total Amount:</div>
        <div>£ {total.toFixed(2)}</div>
      </div>
</div>
 );
}
