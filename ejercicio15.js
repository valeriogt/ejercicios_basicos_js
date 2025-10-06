const products = [
  'Camiseta de Metallica',
  'Pantalón vaquero',
  'Gorra de beisbol',
  'Camiseta de Basket',
  'Cinturón de Orión',
  'AC/DC Camiseta'
];

for (let i = 0; i < products.length; i++) {
  if (products[i].includes('Camiseta')) {
    console.log(products[i]);
  }
}

// También puedes hacerlo con for...of:
for (const product of products) {
  if (product.includes('Camiseta')) {
    console.log(product);
  }
}
