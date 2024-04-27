<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  components: {
    HomePage,
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", this.setScrollVar);
      window.addEventListener("resize", this.setScrollVar);
      this.setScrollVar(); // Call after DOM is ready
    });
  },
  methods: {
    setScrollVar() {
      const htmlElement = document.body;
      if (htmlElement) { // Check if element exists
        const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
        const au = percentOfScreenHeightScrolled * 100;
        console.log("hasil: " + au);
        htmlElement.style.setProperty("--scroll", au);
      } else {
        console.warn("document.body not yet available");
      }
    },
    handleAnimationEnd() {
      if (this.$refs.animated && this.$refs.anime) {
        this.$refs.animated.removeAttribute("id");
        this.$refs.anime.removeAttribute("id");
      } else {
        console.warn("Animated elements not found");
      }
    },
  },
};
</script>
