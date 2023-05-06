<script lang="ts" setup></script>

<template>
  <div
    class="h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
  >
    <div class="menu-bar">NAVIGATION BAR</div>
    <div class="flex justify-center items-center h-full space-x-2">
      <img src="/profile.jpg" class="rounded-xl w-20" />
      <h1 class="text-6xl font-bold">Hi, I'm mooy.</h1>
    </div>
  </div>
</template>

<style>
.menu-bar {
  position: absolute;
  left: 45%;
  bottom: 0;
  margin: 10px;
  background: rgba(145, 127, 179, 0.58);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.4px);
  -webkit-backdrop-filter: blur(9.4px);
  border: 1px solid rgba(145, 127, 179, 0.93);
  font-weight: bold;
  padding: 10px;
}
</style>
