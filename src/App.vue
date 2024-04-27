<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script>
import HomePage from '../components/HomePage.vue'

export default {
  components: {
    HomePage
  },
  mounted() {
    window.addEventListener("scroll", this.setScrollVar);
    window.addEventListener("resize", this.setScrollVar);
    this.setScrollVar(); // Panggil fungsi saat komponen dimuat pertama kali
  },
  methods: {
    setScrollVar() {
        const htmlElement = document.body;
        const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
        const au = percentOfScreenHeightScrolled * 100;
        console.log("hasil: " + au);
        htmlElement.style.setProperty(
          "--scroll",
          au
        );
      }
    handleAnimationEnd() {
      this.$refs.animated.removeAttribute("id");
      this.$refs.anime.removeAttribute("id");
    }
  }
}
</script>
