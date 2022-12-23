import axios from "axios";
import { defineStore } from "pinia";

export const firstTaskStore = defineStore('main', {
    state: () => ({
        todos: [],
    }),

    getters: {
        allTodos: (state) => {
            return state.todos
        }
    },

    actions: {
        async fetchTodos() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            this.todos = response.data;
        },
        async deleteTodo(id) {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
            this.todos = this.todos.filter((todo) => todo.id !== id)
        }
    }
})  