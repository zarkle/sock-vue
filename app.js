'use strict';

var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'A pair of warm, fuzzy socks',
    image: './assets/socks-green.jpg',
    link: 'http://somewhere.com',
    inventory: 100,
    onSale: true,
    details: ['80% cotton', '20% polyester', 'gender-neutral'],
    variants: [
      {
        variantID: 2234,
        variantColor: 'green',
      },
      {
        variantID: 2235,
        variantColor: 'blue',
      }
    ]
  }
});
