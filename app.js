'use strict';

var app = new Vue({
  el: '#app',
  data: {
    brand: 'SockIt',
    product: 'Socks',
    description: 'A pair of warm, fuzzy socks',
    selectedVariant: 0,
    link: 'http://somewhere.com',
    inventory: 100,
    onSale: true,
    details: ['80% cotton', '20% polyester', 'gender-neutral'],
    variants: [
      {
        variantID: 2234,
        variantColor: 'green',
        variantImage: './assets/socks-green.jpg',
        variantQuantity: 5,
      },
      {
        variantID: 2235,
        variantColor: 'blue',
        variantImage: './assets/socks-blue.jpg',
        variantQuantity: 0,
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    cart: 0,
  },
  methods: {
    addToCart() {this.cart += 1;},
    removeFromCart() {this.cart -= 1;},
    updateProduct(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    sale() {
      return this.onSale ? `${this.brand} ${this.product} is ON SALE` : 'not on sale';
    },
  }
});
