import axios from "axios";
import { defineStore } from "pinia";

export const firstTaskStore = defineStore('main', {
    state: () => ({
        todos: [],
    }),

    getters: {
        allTodos: (state) => {
            return state.todos;
        },
    },

    actions: {
        async fetchTodos() {
            const response = await axios.get('http://localhost:3500/todos');
            this.todos = response.data;
        },
        async deleteTodo(id) {
            await axios.delete(`http://localhost:3500/todos/${id}`);
            this.todos = this.todos.filter((todo) => todo.id !== id)
        },
        async editTodo(id) {
            let article = {};
            this.todos.forEach(element => {
                if (element.id == id) {
                    article = element
                }
            });
            article.completed = !article.completed
            await axios.put(`http://localhost:3500/todos/${id}`, article)

        },
        async addTodo(payload) {
            const response = await axios.post('http://localhost:3500/todos', payload);
            this.todos = response.data
            window.location.reload()
        }
    }
})  