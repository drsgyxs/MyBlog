import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 3,
    theme: 'light',
    expand: true,
    todos: [
      { id: 1, text: 'listen music', done: true },
      { id: 2, text: 'play games', done: false },
    ],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    triggerTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
  getters: {
    getTodoById: state => id => state.todos.find(todo => todo.id === id),
  },
  actions: {},
  modules: {},
});
