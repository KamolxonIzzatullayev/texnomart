<template>
  <div class="products">
    <div
      class="nav flex w-full justify-between items-center px-8 py-4 bg-gray-500 text-white"
    >
      <h1>{{ user }}</h1>
      <div class="actions flex items-center justify-between">
        <router-link class="mr-4" to="/cart">Cart</router-link>
        <button class="ml-4" @click="logOut">Log out</button>
      </div>
    </div>
    <h1 class="text-2xl">Products</h1>
    <div class="products">
      <ul class="px-8 w-full flex justify-between flex-wrap">
        <li
          v-for="product in products.allProducts"
          :key="product.id"
          class="max-[500px]:w-full max-sm:w-1/2 sm:w-1/3 lg:w-1/4 p-4"
        >
          <div
            class="pt-4 px-2 pb-2 h-full flex flex-col justify-between product border-2 rounded-lg"
          >
            <div
              class="w-full h-40 flex items-center justify-center product-header"
            >
              <img class="h-full" :src="product.thumbnail" alt="" />
            </div>
            <div
              class="product-body text-left px-4 py-4 mt-8 bg-[#6963b9] rounded-2xl"
            >
              <p
                class="text-white font-extrabold text-xl whitespace-nowrap overflow-hidden text-ellipsis"
              >
                <router-link :to="`/products/${product.id}`">{{
                  product.title
                }}</router-link>
              </p>
              <p
                class="text-white whitespace-nowrap text-xs overflow-hidden text-ellipsis"
              >
                {{ product.description }}
              </p>
              <div class="rating mt-3 flex items-center justify-start">
                <p class="text-white text-xl mr-3">{{ product.rating }}</p>
                <Rating :number="Math.round(product.rating)"></Rating>
              </div>
              <div
                class="flex justify-between items-center mt-3 text-white actions"
              >
                <span class="text-xl">$ {{ product.price }}</span>
                <button
                  @click="addToCart(product)"
                  class="text-lg px-[14px] py-[6px] bg-[#413aa0] rounded-full"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Rating from "@/components/Rating.vue";
import { thirdTaskStore } from "@/stores/products";
export default {
  name: "ProductView",
  data() {
    return {
      products: thirdTaskStore(),
    };
  },
  computed: {
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
    addToCart(obj) {
      this.products.addToCart(obj);
      alert("Product has been added to the cart successfully !!!")
    },
  },
  mounted() {
    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
    } else {
      localStorage.setItem("reloaded", "1");
      window.location.reload();
    }

    this.products.fetchProducts();
  },
  components: { Rating },
};
</script>
