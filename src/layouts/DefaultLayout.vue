<template>
    <HomePage />
    <router-view/>
</template>

<script>
import HomePage from '../components/HomePage.vue';

export default {
    components: {
        HomePage
    },
    name: 'HomePage',
    head() {
        return {
            link: [
                { rel: 'stylesheet', href: '../assets/styles/home.css' }
            ],
            bodyAttrs: {
                class: 'HomePage'
            }
        }
    }
}
</script>