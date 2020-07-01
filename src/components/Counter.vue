<template>
  <div>
    <h1>{{ count }}</h1>
    <h2>{{ this.$store.state.count }}</h2>
    <h3>{{ this.$store.getters.getTodoById(1) }}</h3>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['count']),
  },
};
</script>
