<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <counter />
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/Counter';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Counter,
  },
};
</script>
