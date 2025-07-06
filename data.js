// All prices in pounds
export const products = [
  { id: 'soup',   name: 'Soup',   price: 0.65 },
  { id: 'bread',  name: 'Bread',  price: 1.10 },
  { id: 'milk',   name: 'Milk',   price: 0.35 },
  { id: 'cheese', name: 'Cheese', price: 2.00 },
  { id: 'butter', name: 'Butter', price: 1.20 },
];

/*
 *  Offer catalogue
 *  -------------------------------------------------
 *  • Cheese  – Buy-1-Get-1-Free
 *  • Bread   – Buy-2 Soup, get 1 Bread at 50 % off
 */
export const offers = {
  cheese: basket => {
    const qty = basket.cheese || 0;
    const freebies = Math.floor(qty / 2);
    return {
      description: 'Cheese BOGOF',
      saving: freebies * products.find(p => p.id === 'cheese').price,
    };
  },
  breadWithSoup: basket => {
    const soups  = basket.soup  || 0;
    const breads = basket.bread || 0;
    const halfPriceBreads = Math.min(Math.floor(soups / 2), breads);
    return {
      description: '50 % off Bread (2xSoup)',
      saving:
        halfPriceBreads *
        products.find(p => p.id === 'bread').price *
        0.5,
};
},
};