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
    }
    });
  },
};
</script>

<style>
  :root {
      --color-one: 18, 55, 42;
      --color-two: 67, 104, 80;
      --color-three: 173, 188, 159;
      --color-four: 251, 250, 218;
      --scroll: 0;
    }

    .bg-color-one {
      background-color: rgb(var(--color-one));
    }

    .cus-frame {
      --has: calc(clamp((var(--scroll) / 100) * (-160 - (0 - 40)) + (0 - 40), -160, -150));
      box-shadow:
        calc((110 * (var(--scroll) / 100) + 50) * -1px) calc((110 * (var(--scroll) / 100) + 50) * -1px) 0 calc(var(--has) * 1px) rgb(var(--color-two)),
        calc((110 * (var(--scroll) / 100) + 50) * 1px) calc((110 * (var(--scroll) / 100) + 50) * 1px) 0 calc(var(--has) * 1px) rgb(var(--color-two));
    }

    #anime {
      animation: animal-frame 1s linear;
    }

    @keyframes animal-frame {
      0% {
        box-shadow:
          -160px -160px 0 -160px rgb(var(--color-two)),
          160px 160px 0 -160px rgb(var(--color-two));
      }

      10% {
        box-shadow:
          -160px -160px 0 -150px rgb(var(--color-two)),
          160px 160px 0 -150px rgb(var(--color-two));
      }

      100% {
        box-shadow:
          -50px -50px 0 -40px rgb(var(--color-two)),
          50px 50px 0 -40px rgb(var(--color-two));
      }
    }

    .text-color-one {
      color: rgb(var(--color-one));
    }

    .text-color-two {
      color: rgb(var(--color-two));
    }

    .text-color-three {
      color: rgb(var(--color-three));
    }

    .bg-color-four {
      background-color: rgb(var(--color-four));
    }

    body {
      background-color: rgb(var(--color-four));
    }

    .scroll {
      transform-style: preserve-3d;
      transform-origin: left bottom;
      --putaran: calc(-40 * min((max(var(--scroll), 50) / 100) - (50 / 100), 100/100) + 20);
      transform: rotateZ(calc(var(--putaran) * 1deg));
    }

    .scroll2 {
      transform-style: preserve-3d;
      transform-origin: left center;
      --putaran2: calc(-40 * min((max(var(--scroll), 150) / 100) - (150 / 100), 100/100) + 20);
      transform: rotateZ(calc(var(--putaran2) * 1deg));
    }

    .scroll3 {
      transform-style: preserve-3d;
      transform-origin: left center;
      --putaran3: calc(-40 * min((max(var(--scroll), 250) / 100) - (250 / 100), 100/100) + 20);
      transform: rotateZ(calc(var(--putaran3) * 1deg));
    }

    .scroll4 {
      transform-style: preserve-3d;
      transform-origin: left center;
      --putaran4: calc(-40 * min((max(var(--scroll), 350) / 100) - (350 / 100), 100/100) + 20);
      transform: rotateZ(calc(var(--putaran4) * 1deg));
    }

    .scroll5 {
      transform-style: preserve-3d;
      transform-origin: left center;
      --putaran5: calc(-40 * min((max(var(--scroll), 450) / 100) - (450 / 100), 100/100) + 20);
      transform: rotateZ(calc(var(--putaran5) * 1deg));
    }

    .scroll6 {
      transform-origin: left center;
      transform-style: preserve-3d;
      --putaran6: calc(-40 * min((max(var(--scroll), 550) / 100) - (550 / 100), 100/100) + 20);
      transform: rotateZ(calc(var(--putaran6) * 1deg));
    }

    .scroll7 {
      transform-origin: left center;
      transform-style: preserve-3d;
      --putaran7: calc(-40 * min((max(var(--scroll), 650) / 100) - (650 / 100), 100/100) + 20);
      transform: rotateZ(calc(var(--putaran7) * 1deg));
    }

    .text-ani {
      transform: translateY(calc(var(--scroll) * -1%));
      clip-path: polygon(0 calc((var(--scroll) * 1%) + 22%), 100% calc((var(--scroll) * 1%) + 22%), 100% 100%, 0 100%);
    }

    @media (max-width: 640px) {
      .bg-nav {
        background-color: rgb(var(--color-four));
      }
    }
</style>
