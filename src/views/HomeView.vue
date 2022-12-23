<template>
  <div class="home">
    <h1 class="text-2xl font-bold">All todos</h1>
    <ul class="w-1/2 mx-auto">
      <li
        class="w-full border flex justify-between items-center my-4 p-4 hover:bg-sky-500 hover:text-white cursor-pointer"
        v-for="todo in todos.todos"
        :key="todo.id"
      >
        <span class="w-full">{{ todo.title }}</span>
        <button class="bg-red-600 py-3 px-4" @click="todos.deleteTodo(todo.id)">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { firstTaskStore } from "@/stores/firstTask";
export default {
  name: "HomeView",
  data() {
    return {
      todos: firstTaskStore(),
    };
  },

  mounted() {
    this.todos.fetchTodos();
  },
};
</script>

<style lang="scss" scoped></style>
