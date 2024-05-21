<template>
  <div id="app">
    <AboutPage />
  </div>
</template>

<script>
import HomePage from '../components/AboutPage.vue';

export default {
  components: {
    AboutPage,
  },
  name: 'About'
};
</script>

<style>
  :root {
      --color-one: 251, 255, 255;
      --color-two: 251, 255, 255;
      --color-three: 27, 30, 35;
      --color-four: 27, 30, 35;
      --scroll: 0;
    }

    .bg-color-one {
      background-color: rgb(var(--color-one));
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
      overflow-y: hidden;
    }

    .text-ani {
      transform: translateY(calc(var(--scroll) * -1%));
      clip-path: polygon(0 calc((var(--scroll) * 1%) + 14%), 100% calc((var(--scroll) * 1%) + 14%), 100% 100%, 0 100%);
    }

    @media (max-width: 640px) {
      .bg-nav {
        background-color: rgb(var(--color-four));
      }
    }
</style>