'use strict';

Vue.component('product', {
  template: `
    <div class="product">

    <div class="product-image">
      <img v-bind:src="image" :alt="description">
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <p v-if="inStock">In stock</p>
      <p v-else :class="{ outOfStock: !inStock }">Out of stock</p>
      <p>{{ sale }}</p>

      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>

      <p>Sizes Available:</p>
      <ul>
        <li v-for="size in sizes">{{ size }}</li>
      </ul>

      <p>Colors Available:</p>
      <div v-for="(variant, index) in variants"
          :key="variant.variantID"
          class="color-box"
          :style="{ backgroundColor: variant.variantColor }"
          @mouseover="updateProduct(index)">
      </div>

      <a :href="link" target="_blank">More products like this</a>

      <button v-on:click="addToCart"
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }">
        Add to Cart
      </button>
      <button @click="removeFromCart">Remove from Cart</button>
      <div class="cart">
        <p>Cart ({{ cart }})</p>
      </div>
    </div>
  `,
  data() {
    return {
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
    };
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
})

var app = new Vue({
  el: '#app',
});
