<template>
  <div class="w-full px-8">
    <h1 class="my-4">All products</h1>
    <table class="table-auto w-full">
      <thead>
        <tr class="bg-gray-300">
          <th class="py-4">Id</th>
          <th class="py-4">Title</th>
          <th class="py-4">Price</th>
          <th class="py-4 cursor-pointer" @click="sortBrand">Brand {{ branded == '1' ? '&#8595' : '&#8593' }}</th>
          <th class="py-4">Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-sky-200 cursor-pointer hover:bg-sky-300"
          v-for="item in branded == '1' ? products.getSortedArray.slice((page-1)*4, (page-1)*4 + 4) : products.allProducts.slice((page-1)*4, (page-1)*4 + 4)"
          :key="item.id"
        >
          <td class="py-4">{{ item.id }}</td>
          <td class="py-4">{{ item.title }}</td>
          <td class="py-4">{{ item.price }}</td>
          <td class="py-4">{{ item.brand }}</td>
          <td class="py-4">{{ item.stock }}</td>
        </tr>
      </tbody>
    </table>

      <div class="flex justify-center my-4">
        <paginate
        :page-count="20"
        :page-range="3"
        :margin-pages="2"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'page-item'"
      >
      </paginate>
      </div>
  </div>
</template>
<script>
import { secondTaskStore } from "@/stores/secondTask";
import Paginate from "vuejs-paginate-next";
export default {
  components: {
    paginate: Paginate,
  },
  data() {
    return {
      products: secondTaskStore(),
      branded: undefined,
      page: 1,
    };
  },
  methods: {
    clickCallback(e) {
      this.page = e;
    },
    sortBrand() {
      if (!this.branded || this.branded == 2) {
        this.branded = 1;
      } else {
        this.branded = 2;
      }
    }
  },
  mounted() {
    this.products.fetchProducts();
  },
};
</script>

<style lang="css" scoped>
  /* Adopt bootstrap pagination stylesheet. */
  @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";

  /* Write your own CSS for pagination */
  .pagination {
    cursor: pointer;
  }
</style>