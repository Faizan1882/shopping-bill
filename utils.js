import { offers, products } from './data';

// Convert array of product objects into {id: qty} map
export const toQtyMap = items =>
  items.reduce((acc, { id }) => {
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});

export const calcSubtotal = items =>
  items.reduce((sum, { price }) => sum + price, 0);

export const calcOffers = items => {
  const basketMap = toQtyMap(items);
  const activeOffers = Object.values(offers)
    .map(fn => fn(basketMap))
    .filter(o => o.saving > 0);

  const totalSaving = activeOffers.reduce((s, o) => s + o.saving, 0);
  return { activeOffers, totalSaving };
};
