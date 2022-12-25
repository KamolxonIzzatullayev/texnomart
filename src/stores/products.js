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
        addToCart(payload) {
            if (localStorage.getItem('cart')) {
                if (JSON.parse(localStorage.getItem('cart')).user == localStorage.getItem('username')) {
                    let cart = JSON.parse(localStorage.getItem('cart'));

                    let a = payload;
                    a.quantity = 1;

                    let isTrue = cart.products.some(function (e) {
                        return e.id == payload.id;
                    });

                    if (isTrue) {
                        cart.products.forEach(element => {
                            if (element.id == payload.id) {
                                element.quantity++
                            }
                        });
                    } else {
                        cart.products.push(a);
                    }


                    console.log(cart);

                    localStorage.removeItem('cart');
                    localStorage.setItem('cart', JSON.stringify(cart))
                } else {
                    localStorage.removeItem('cart');

                    let cart = {
                        user: localStorage.getItem('username'),
                        products: []
                    };

                    let a = payload;
                    a.quantity = 1;
                    cart.products.push(a)

                    localStorage.removeItem('cart');
                    localStorage.setItem('cart', JSON.stringify(cart))

                }
            } else {
                let cart = [];

                let a = payload;
                a.quantity = 1;
                cart.push(a)
                let newObj = {};
                newObj.user = localStorage.getItem('username');
                newObj.products = cart;
                localStorage.setItem('cart', JSON.stringify(newObj))
            }

        },

        minusFromCart(payload) {
            let cart = JSON.parse(localStorage.getItem('cart'));

            cart.products.forEach(element => {
                if (payload.id == element.id) {
                    element.quantity--;
                }
            });

            cart.products.forEach((element, index) => {
                if (element.quantity <= 0) {
                    cart.products.splice(index, 1)
                }
            });

            localStorage.removeItem('cart');
            localStorage.setItem('cart', JSON.stringify(cart))

            if (!JSON.parse(localStorage.getItem('cart')).products.length) {

                localStorage.removeItem('cart');
            }
        }
    }
})  