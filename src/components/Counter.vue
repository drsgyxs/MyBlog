<template>
  <div>
    <h1>{{ count }}</h1>
    <h2>{{ this.$store.state.count }}</h2>
    <div>
      <input type="number" v-model="amount" />
      <button @click="increment({ amount })">增加</button>
    </div>
    <h3>id为{{ id }}的todo：{{ this.$store.getters.getTodoById(id) }}</h3>
    <div>
      已完成的待办：{{ doneTodos }}, 已完成的待办数：{{ doneTodosCount }}
    </div>
    <div>all todos: {{ todos }}</div>
    <div>
      <input type="text" v-model="todo" />
      <button @click="saveTodo({ todo })">保存待办</button>
      <button @click="saveTodoAsync({ todo })">异步保存</button>
    </div>

    <div>
      <span>{{ theme }}</span>
      <button @click="triggerThemeColor">切换主题色</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import {
  INCREMENT,
  TRIGGER_THEME_COLOR,
  SAVE_TODO,
} from '@/store/mutation-types';

export default {
  data() {
    return {
      id: 5,
      amount: 0,
      todo: null,
    };
  },
  methods: {
    ...mapMutations([INCREMENT, TRIGGER_THEME_COLOR, SAVE_TODO]),
    ...mapActions(['saveTodoAsync']),
  },
  computed: {
    ...mapState(['count', 'theme', 'todos']),
    ...mapGetters(['getTodoById', 'doneTodos', 'doneTodosCount']),
  },
};
</script>
