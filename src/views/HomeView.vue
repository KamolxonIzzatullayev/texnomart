<template>
  <div class="home">
    <h1 class="text-2xl font-bold">All todos</h1>
    <div class="w-2/3 mx-auto my-4 flex">
      <input
        type="text"
        class="w-full px-4 py-3 border mr-4"
        placeholder="Add todo"
        v-model="title"
      />
      <button class="bg-sky-300 mr-4 text-white py-3 px-4" @click="addTodo">
        ADD
      </button>
    </div>
    <p class="my-3 text-red-600" v-if="!title.length">Please write something !!!</p>
    <ul class="w-2/3 mx-auto">
      <li
        class="w-full border flex justify-between items-center my-4 p-4 hover:bg-sky-500 hover:text-white cursor-pointer"
        v-for="todo in todos.allTodos"
        :key="todo.id"
        @click="todos.editTodo(todo.id)"
      >
        <span class="w-full" :class="!todo.completed ? '' : 'line-through'">{{
          todo.title
        }}</span>
        <button
          class="bg-red-600 text-white py-3 px-4"
          @click="todos.deleteTodo(todo.id)"
        >
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
      title: "",
    };
  },

  methods: {
    addTodo() {
      if (this.title.length) {
        let id = this.todos.allTodos[this.todos.allTodos.length - 1].id;
        this.todos.addTodo({
          id: id + 1,
          title: this.title,
          completed: false,
        });
      }
    },
  },

  mounted() {
    this.todos.fetchTodos();
  },
};
</script>

<style lang="scss" scoped></style>
