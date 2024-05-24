<template>
    <HomePage />
    <router-view/>
</template>

<script>
import HomePage from '../components/HomePage.vue';

export default {
    components: {
        HomePage
    }
}
</script>

<style scoped>
:root {
      --color-one: 18, 55, 42;
      --color-two: 67, 104, 80;
      --color-three: 173, 188, 159;
      --color-four: 251, 250, 218;
      --scroll: 0;
    }
</style>