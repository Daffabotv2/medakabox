<template>
    <AboutPage />
</template>

<script>
import AboutPage from '../components/AboutPage.vue';

export default {
    components: {
        AboutPage
    },
    name: 'AboutPage',
    head() {
        return {
            link: [
                { rel: 'stylesheet', href: '../assets/styles/about.css' }
            ],
            bodyAttrs: {
                class: 'AboutPage'
            }
        }
    }
}
</script>