import Vue from 'vue';
import Vuex from 'vuex';
import { INCREMENT, SAVE_TODO, TRIGGER_THEME_COLOR } from './mutation-types.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 3,
    theme: {
      color: 'light',
      expand: true,
      userInfo: {
        name: 'drsg',
        mail: 'drsg@drsgyxs.wang',
      },
    },
    todos: [
      { id: 1, text: 'listen music', done: true },
      { id: 2, text: 'play games', done: false },
      { id: 3, text: 'read books', done: true },
    ],
  },
  mutations: {
    [INCREMENT](state, { amount }) {
      if (!isNaN(amount)) state.count += Number(amount);
    },
    [TRIGGER_THEME_COLOR]({ theme }) {
      let { color } = theme;
      color = color === 'light' ? 'dark' : 'light';
      Vue.set(theme, 'color', color);
      Vue.set(theme, 'userInfo', { name: 'hhh', mail: 'drsg@qq.com' });
      // state.theme = {
      //   ...state.theme,
      //   color,
      //   userInfo: { name: 'hhh', mail: 'drsg@qq.com' },
      // };
    },
    [SAVE_TODO](state, payload) {
      state.todos.push({
        id: state.todos.length + 1,
        text: payload.todo,
        done: false,
      });
    },
  },
  getters: {
    getTodoById: state => id => state.todos.find(todo => todo.id === id),
    doneTodos: state => state.todos.filter(todo => todo.done),
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
  },
  actions: {
    incrementAsync(context) {
      context.commit({
        type: INCREMENT,
        amount: 1,
      });
    },
    saveTodoAsync({ commit }, todo) {
      setTimeout(() => {
        commit(SAVE_TODO, todo);
      }, 1000);
    },
  },
  modules: {},
});
