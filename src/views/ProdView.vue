<template>
  <div class="w-full px-8">
    <h1 class="text-4xl font-extrabold mt-6 text-left">
      {{ product.title }}
    </h1>
    <div class="flex my-8 flex-wrap">
      <div class="h-[50vh] sm:w-full lg:w-3/5">
        <img class="w-full h-full" :src="product.thumbnail" alt="" />
      </div>
      <div class="max-[500px]:w-full max-sm:w-full sm:w-full lg:w-2/5">
        <div class="h-full m-8 p-8">
          <div class="price">
            <h1 class="text-left text-4xl font-black">
              $ {{ product.price }} (<span class="text-red-500">
                -{{ product.discountPercentage }}% </span
              >)
            </h1>

            <h1 class="text-left mt-3 text-3xl font-medium">
              Stock left: {{ product.stock }}
            </h1>

            <p class="text-left mt-3 text-3xl font-medium">
              <span>Brand: </span>
              <span>{{ product.brand }}</span>
            </p>

            <p class="text-left mt-3 text-3xl font-medium">
              <span>Category: </span>
              <span>{{ product.category }}</span>
            </p>

            <div class="rating text-left mt-3 text-3xl font-medium">
              <span>Rating: </span>
              <span>{{ product.rating }}</span>
            </div>

            <button
              @click="buyProduct"
              class="w-full mt-8 text-3xl py-4 rounded-xl font-medium bg-[#DDE4ED]"
            >
              Buy product
            </button>
            <p v-if="isVisible" class="text-xl text-red-500">
              Sorry, site is not working very well !!!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from "@/components/Rating.vue";
import { thirdTaskStore } from "@/stores/products";
export default {
  name: "ProductView",
  components: { Rating },
  data() {
    return {
      productById: thirdTaskStore(),
      isVisible: false,
    };
  },
  computed: {
    product() {
      return this.productById.productById;
    },
  },
  methods: {
    buyProduct() {
      const token = localStorage.getItem("token");
      if (token) {
        this.isVisible = true;
      } else {
        this.$router.push("/auth");
      }
    },
  },
  mounted() {
    this.productById.fetchProductById(this.$route.params.id);
  },
};
</script>
