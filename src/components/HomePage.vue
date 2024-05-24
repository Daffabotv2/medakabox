<template>
  <div class="min-h-screen flex flex-col justify-center brah">
    <nav class="fixed top-0 z-10 sm:z-[1] h-14 w-full flex justify-between transition duration-500 ease-in-out" v-bind:class="{'max-[640px]:h-full': open, 'bg-nav': open }" x-data="{ open: false }">
      <div class="w-12 h-12 bg-[url('https://raw.githubusercontent.com/Daffabotv2/medakabox/main/src/assets/logo2.png')] bg-no-repeat bg-contain ml-4 mt-1"></div>
      <ul class="flex sm:flex-row-reverse max-[640px]:flex-col justify-center items-center transition duration-500 ease-in-out text-center" v-bind:class="{'max-[640px]:hidden': !open }">
        <li>
          <h1 class="text-color-two max-[640px]:mx-auto sm:mr-8 max-[330px]:text-4xl max-[640px]:text-6xl font-bold max-[640px]:mb-20 transition duration-500" v-bind:class="{'nav-ani': open }"><router-link to="/about">>About</router-link></h1>
        </li>
        <li class="text-color-two sm:mr-8 transition duration-500" v-bind:class="{'nav-ani': open }">Social: <a href="https://twitter.com/daffabot_id" target="_blank" rel="noopener noreferrer" class="underline">TW</a> <a href="https://github.com/Daffabot" target="_blank" rel="noopener noreferrer" class="underline">GH</a> <a href="https://linkedin.com/in/daffabot" target="_blank" rel="noopener noreferrer" class="underline">LI</a></li>
        <li class="text-color-two sm:mr-8 transition duration-500" v-bind:class="{'nav-ani': open }">Available For Exigent <a href="https://wa.me/+6285156207150?text=Halo+Bang" rel="noopener noreferrer" target="_blank" class="underline">+62 85156207150</a></li>
      </ul>
      <button class="w-14 h-14 focus:outline-none rounded sm:hidden" @click="open = !open">
        <div class="block w-14">
          <span class="block absolute h-0.5 w-7 bg-color-one transform transition duration-500 ease-in-out" v-bind:class="{'rotate-45': open, '-translate-y-1.5': !open }"></span>
          <span class="block absolute  h-0.5 w-5 bg-color-one transform transition duration-500 ease-in-out" v-bind:class="{'opacity-0': open } "></span>
          <span class="block absolute  h-0.5 w-7 bg-color-one transform transition duration-500 ease-in-out" v-bind:class="{'-rotate-45': open, 'translate-y-1.5': !open}"></span>
        </div>
      </button>
    </nav>
    <main>
      <section class="h-screen flex flex-col justify-center items-center state">
        <div class="fixed title mx-auto text-center text-8xl sm:text-9xl font-bold cus-frame max-w-max text-color-one loading-text" id="anime" @animationend="handleAnimationEnd">
          <h1 class="mb-[-0.65rem] text-ani" id="animated" @animationend="handleAnimationEnd">Med</h1>
          <h1 class="text-ani" id="animated" @animationend="handleAnimationEnd">Box</h1>
        </div>
      </section>
      <section class="h-screen flex flex-col justify-center state">
        <img src="../assets/medic1.png" alt="photo" class="w-56 h-56 sm:w-96 sm:h-96 object-contain mx-auto scroll">
        <h1 class="font-bold text-6xl sm:text-8xl ml-auto mr-20 max-[500px]:mr-9 sm:mr-auto -mb-10 sm:-mb-20 text-color-one scroll pos">
          PR.01</h1>
        <b class="ml-10 mr-5 sm:ml-auto sm:mr-auto text-left text-color-three scroll">Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Incidunt<br>laudantium cupiditate eaque iste?.</b>
      </section>
      <section class="h-screen flex flex-col justify-center state">
        <img src="../assets/medic1.png" alt="photo" class="w-56 h-56 sm:w-96 sm:h-96 object-contain mx-auto scroll2">
        <h1 class="font-bold text-6xl sm:text-8xl ml-auto mr-20 max-[500px]:mr-9 sm:mr-auto -mb-10 sm:-mb-20 text-color-one scroll2 pos">
          PR.02</h1>
        <b class="ml-10 mr-5 sm:ml-auto sm:mr-auto text-left text-color-three scroll2">Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Incidunt<br>laudantium cupiditate eaque iste?.</b>
      </section>
      <section class="h-screen flex flex-col justify-center state">
        <img src="../assets/medic1.png" alt="photo" class="w-56 h-56 sm:w-96 sm:h-96 object-contain mx-auto scroll3">
        <h1 class="font-bold text-6xl sm:text-8xl ml-auto mr-20 max-[500px]:mr-9 sm:mr-auto -mb-10 sm:-mb-20 text-color-one scroll3 pos">
          PR.03</h1>
        <b class="ml-10 mr-5 sm:ml-auto sm:mr-auto text-left text-color-three scroll3">Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Incidunt<br>laudantium cupiditate eaque iste?.</b>
      </section>
      <section class="h-screen flex flex-col justify-center state">
        <img src="../assets/medic1.png" alt="photo" class="w-56 h-56 sm:w-96 sm:h-96 object-contain mx-auto scroll4">
        <h1 class="font-bold text-6xl sm:text-8xl ml-auto mr-20 max-[500px]:mr-9 sm:mr-auto -mb-10 sm:-mb-20 text-color-one scroll4 pos">
          PR.04</h1>
        <b class="ml-10 mr-5 sm:ml-auto sm:mr-auto text-left text-color-three scroll4">Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Incidunt<br>laudantium cupiditate eaque iste?.</b>
      </section>
      <section class="h-screen flex flex-col justify-center state">
        <img src="../assets/medic1.png" alt="photo" class="w-56 h-56 sm:w-96 sm:h-96 object-contain mx-auto scroll5">
        <h1 class="font-bold text-6xl sm:text-8xl ml-auto mr-20 max-[500px]:mr-9 sm:mr-auto -mb-10 sm:-mb-20 text-color-one scroll5 pos">
          PR.05</h1>
        <b class="ml-10 mr-5 sm:ml-auto sm:mr-auto text-left text-color-three scroll5">Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Incidunt<br>laudantium cupiditate eaque iste?.</b>
      </section>
      <section class="h-screen flex flex-col justify-center state">
        <img src="../assets/medic1.png" alt="photo" class="w-56 h-56 sm:w-96 sm:h-96 object-contain mx-auto scroll6">
        <h1 class="font-bold text-6xl sm:text-8xl ml-auto mr-20 max-[500px]:mr-9 sm:mr-auto -mb-10 sm:-mb-20 text-color-one scroll6 pos">
          PR.06</h1>
        <b class="ml-10 mr-5 sm:ml-auto sm:mr-auto text-left text-color-three scroll6">Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Incidunt<br>laudantium cupiditate eaque iste?.</b>
      </section>
      <section class="h-screen flex flex-col justify-center state">
        <img src="../assets/medic1.png" alt="photo" class="w-56 h-56 sm:w-96 sm:h-96 object-contain mx-auto scroll7">
        <h1 class="font-bold text-6xl sm:text-8xl ml-auto mr-20 max-[500px]:mr-9 sm:mr-auto -mb-10 sm:-mb-20 text-color-one scroll7 pos">
          PR.07</h1>
        <b class="ml-10 mr-5 sm:ml-auto sm:mr-auto text-left text-color-three scroll7">Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Incidunt<br>laudantium cupiditate eaque iste?.</b>
      </section>
    </main>
  </div>
</template>

<script>
import "../assets/js/scroll.js";
  
export default {
  data() {
    return {
      open: false, // Initial state of the navigation menu
    };
  },
  methods: {
    toggleMenu() {
      this.open = !this.open; // Toggles the open state of the menu on button click
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
      clip-path: polygon(0 calc((var(--scroll) * 1%) + 14%), 100% calc((var(--scroll) * 1%) + 14%), 100% 100%, 0 100%);
    }

    @media (max-width: 640px) {
      .bg-nav {
        background-color: rgb(var(--color-four));
      }
    }

    html {
      -ms-overflow-style: none;
      scrollbar-width: none;
      scroll-snap-type: y mandatory;
    }

    html::-webkit-scrollbar {
      display: none;
    }

    section {
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }

    #animated {
      animation: parallax-up 1s linear;
    }

    @keyframes parallax-up {
      0% {
        transform: translateY(-100%);
        clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
      }

      100% {
        transform: translateY(0);
        clip-path: polygon(0 22%, 100% 22%, 100% 100%, 0 100%);
      }
    }

    .pos {
      translate: 220px -17rem 0;
    }

    .title {
      margin: 0 auto;
      float: right;
    }

    @media (max-width: 640px) {
      .pos {
        translate: 0 -9rem 0;
      }

      .nav-ani {
        animation: parallax-up 0.5s ease-in-out;
      }
    }
</style>
