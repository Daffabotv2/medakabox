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

<style src="../assets/styles/home.css"></style>