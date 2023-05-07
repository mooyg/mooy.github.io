<script lang="ts" setup>
import { onUpdated, ref, watch } from "vue";

const dockElements = ref([
  {
    icon: "/icons/home.svg",
    class: "",
    name: "Home",
  },
  {
    icon: "/icons/blog.svg",
    class: "",
    name: "Blog",
  },
  {
    icon: "/icons/twitter.svg",
    class: "",
    name: "Twitter",
  },
  {
    icon: "/icons/spotify.svg",
    class: "",
    name: "Spotify",
  },
  {
    icon: "/icons/github.svg",
    class: "",
    name: "Github",
  },
  {
    icon: "/icons/darkmode.svg",
    class: "",
    name: "DarkMode",
  },
]);

function animateDock(index: number) {
  dockElements.value = dockElements.value.map((dockElement, dockIndex) => {
    if (dockIndex === index) {
      return {
        ...dockElement,
        class: "scale-150",
      };
    } else if (dockIndex === index + 1) {
      return {
        ...dockElement,
        class: "scale-125",
      };
    } else {
      return {
        ...dockElement,
        class: "scale-95",
      };
    }
  });
}

function unAnimateDock() {
  console.log("what");
  dockElements.value = dockElements.value.map((dockElement) => {
    return {
      ...dockElement,
      class: "",
    };
  });
}

watch(
  () => dockElements.value,
  () => console.log(dockElements.value),
  { deep: true }
);
</script>

<template>
  <div
    class="h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
  >
    <div
      class="menu-bar mb-2 absolute bottom-0 left-1/2 flex -translate-x-1/2 space-x-4 p-2 md:space-x-8 md:w-fit w-max"
    >
      <button
        v-for="(dockElement, index) in dockElements"
        @mouseover="animateDock(index)"
        @mouseout="unAnimateDock"
        class="transition-all ease-in-out"
        :class="dockElement.class"
      >
        <img :src="dockElement.icon" />
      </button>
    </div>
    <div class="flex justify-center items-center h-full space-x-2">
      <img src="/profile.jpg" class="rounded-xl md:w-14 w-9" />
      <h1 class="md:text-6xl text-4xl font-bold">Hi, I'm mooy.</h1>
    </div>
  </div>
</template>

<style>
.menu-bar {
  background: rgba(145, 127, 179, 0.58);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.4px);
  -webkit-backdrop-filter: blur(9.4px);
  border: 1px solid rgba(145, 127, 179, 0.93);
  font-weight: bold;
}
</style>
