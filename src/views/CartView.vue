<template>
  <div class="cart">
    <div
      class="nav flex w-full justify-between items-center px-8 py-4 bg-gray-500 text-white"
    >
      <h1>{{ user }}</h1>
      <div class="actions flex items-center justify-between">
        <button class="ml-4" @click="logOut">Log out</button>
      </div>
    </div>
    <h1 class="my-8 text-2xl font-bold">Cart</h1>
    <div class="flex px-8">
      <div class="sm:w-3/5 max-sm:w-full">
        <ul class="w-full">
          <li
            v-for="product in cartProducts ? cartProducts.products : null"
            :key="product.id"
            class="my-4 rounded-3xl flex justify-between items-center bg-gray-300 p-4"
          >
            <div class="w-1/4 img">
              <img class="w-20 h-20" :src="product.thumbnail" alt="" />
            </div>
            <div class="w-1/2 info">
              <router-link :to="`/products/${product.id}`">{{
                product.title
              }}</router-link>
            </div>
            <div class="w-1/4 quantity">
              <h1 class="text-xl">{{ product.quantity }}</h1>
              <div
                class="actions w-full flex justify-between items-center px-4 pt-1"
              >
                <button
                  @click="minusFromCart(product)"
                  class="text-white text-lg px-[14px] py-[3px] bg-[#413aa0] rounded-full"
                >
                  -
                </button>
                <button
                  @click="addToCart(product)"
                  class="text-white text-base px-[12px] py-[6px] bg-[#413aa0] rounded-full"
                >
                  +
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="cartProducts ? cartProducts.products.length : false" class="buy sm:w-2/5 max-sm:w-full p-4">
        <button
          @click="buyProduct"
          class="w-full mt-8 text-3xl py-4 rounded-xl font-medium bg-[#DDE4ED]"
        >
          Buy products
        </button>
        <p v-if="isVisible" class="text-xl text-red-500">
          Sorry, site is not working very well !!!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { thirdTaskStore } from "@/stores/products";
export default {
  data() {
    return {
      products: thirdTaskStore(),
      isVisible: false,
    };
  },
  computed: {
    cartProducts() {
      return JSON.parse(localStorage.getItem("cart"));
    },
    user() {
      return localStorage.getItem("username");
    },
  },

  methods: {
    logOut() {
      localStorage.removeItem("username");
      localStorage.removeItem("cart");
      this.$router.push("/auth");
    },
    minusFromCart(obj) {
      this.products.minusFromCart(obj);
      window.location.reload();
    },
    addToCart(obj) {
      this.products.addToCart(obj);
      window.location.reload();
    },
    buyProduct() {
      const token = localStorage.getItem("username");
      if (token) {
        this.isVisible = true;
      } else {
        this.$router.push("/auth");
      }
    },
  },
};
</script>
