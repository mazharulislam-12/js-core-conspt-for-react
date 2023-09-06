const products = [
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'Mobile', price: 6500, brand: 'Apple', color: 'Black'},
    {name: 'Mobile', price: 20000, brand: 'Oppo', color: 'Golden'},
    {name: 'Watch', price: 5600, brand: 'Mi', color: 'Black'},
    {name: 'Tablet', price: 200000, brand: 'pixel', color: 'golden'},
];
const brands = products.map (product => product.brand)
console.log(brands);
const prices = products.map(product => product.price)
console.log(prices);
const name = products.map(product => product.name)
console.log(name);

// forEach
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

// filter
const cheap = products.filter(product => product.price <= 2000);
console.log(cheap);
const spicficeName = products.filter(product => product.name.includes ('n'))
console.log(spicficeName);

// find
const spicalName = products.find(product => product.name.includes('n'))
console.log(spicalName);