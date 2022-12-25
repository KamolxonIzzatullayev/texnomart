<template>
  <div class="auth">
    <h1 class="text-2xl">Login page</h1>

    <div class="md:w-1/4 max-md:w-full mx-auto">
      <input
        class="w-full mt-4 py-4 px-3 border"
        type="text"
        placeholder="Username"
        v-model="login"
      />
      <p v-if="checkLogin" class="text-red-500 mt-4">Username required !!!</p>
      <input
        class="w-full mt-4 py-4 px-3 border"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <p v-if="checkPassword" class="text-red-500 mt-4">
        Password required !!!
      </p>
      <button
        @click="loginCheck"
        class="bg-sky-500 w-full py-4 mt-4 text-white"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { authStore } from "@/stores/auth";
export default {
  data() {
    return {
      login: "",
      password: "",
      checkLogin: false,
      checkPassword: false,
      store: authStore(),
    };
  },
  methods: {
    async loginCheck() {
      if (this.login == "") {
        this.checkLogin = true;
      } else {
        this.checkLogin = false;
        if (this.password == "") {
          this.checkPassword = true;
        } else {
          localStorage.setItem("username", this.login);
          this.$router.push('/products')
        }
      }
    },
  },
};
</script>
