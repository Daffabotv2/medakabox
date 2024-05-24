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

<style src="../assets/css/home.css"></style>