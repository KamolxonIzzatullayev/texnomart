import axios from "axios";
import { defineStore } from "pinia";


export const secondTaskStore = defineStore('main', {
    state: () => ({
        products: [],
        sortedArray: [],
    }),

    getters: {
        allProducts: (state) => {
            return state.products;
        },
        getSortedArray: (state) => {
            return state.sortedArray
        }
    },

    actions: {
        async fetchProducts() {
            const response = await axios.get('https://dummyjson.com/products?limit=100&skip=0');
            this.sortedArray = [...response.data.products];
            this.sortedArray = this.sortedArray.sort(
                (rowA, rowB) => {
                    return rowA.brand.localeCompare(rowB.brand)
                }
            )
            this.products = response.data.products;
        },
    }
})  