import axios from "axios";
import { defineStore } from "pinia";


export const authStore = defineStore('main', {
    state: () => ({
        result: undefined
    }),

    getters: {
        getResult: (state) => {
            return state.result;
        },
    },

    actions: {
        async fetchUser(payload) {
            const response = await axios.post('https://dummyjson.com/auth/login', payload);
            this.result = response;
        },
    }
})  