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
        variantImage: './assets/socks-green.jpg',
      },
      {
        variantID: 2235,
        variantColor: 'blue',
        variantImage: './assets/socks-blue.jpg',
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    cart: 0,
  },
  methods: {
    addToCart() {this.cart += 1;},
    updateProduct(variantImage) {this.image = variantImage;},
  }
});
