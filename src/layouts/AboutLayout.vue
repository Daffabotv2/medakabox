<template>
    <AboutPage></AboutPage>
    <router-view></router-view>
</template>

<script>
export default {
    components: {
        AboutPage: () => import('../components/AboutPage.vue')
    }
}
</script>

<style scoped>
@import '../assets/styles/about.css';
</style>