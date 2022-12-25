import axios from "axios";
import { defineStore } from "pinia";


export const thirdTaskStore = defineStore('main', {
    state: () => ({
        products: [],
        productById: {},
    }),

    getters: {
        allProducts: (state) => {
            return state.products;
        },
        getProductById: (state) => {
            return state.productById;
        },
    },

    actions: {
        async fetchProducts() {
            const response = await axios.get('https://dummyjson.com/products');
            this.products = response.data.products;
        },
        async fetchProductById(id) {
            const response = await axios.get(`https://dummyjson.com/products/${id}`);
            this.productById = response.data;
        },
    }
})  