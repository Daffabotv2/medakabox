<template>
    <HomePage/>
    <router-view/>
</template>

<script>
import { defineComponent } from 'vue';
import HomePage from '../components/HomePage.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    HomePage,
  },
});
</script>