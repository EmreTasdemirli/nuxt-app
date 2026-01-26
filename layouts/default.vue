<script setup lang="ts">
import { ref, onMounted } from "vue";

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", "enabled");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", "disabled");
  }
};

onMounted(() => {
  if (localStorage.getItem("darkMode") === "enabled") {
    isDarkMode.value = true;
    document.documentElement.classList.add("dark");
  }
});
</script>

<template>
  <div class="dark:bg-gray-900 dark:text-white min-h-screen">
    <header style="background-color: #333; padding: 1rem; color: white">
      <NuxtLink to="/" style="margin-right: 1rem; color: white"
        >Startseite</NuxtLink
      >
      <NuxtLink to="/about" style="margin-right: 1rem; color: white"
        >Über uns</NuxtLink
      >

      <NuxtLink to="/kontakte" style="margin-right: 1rem; color: white"
        >Kontakte</NuxtLink
      >

      <button
        @click="toggleDarkMode"
        class="p-2 ml-4 bg-gray-300 rounded"
        style="color: black"
      >
        {{ isDarkMode ? "Light Mode ☀️" : "Dark Mode 🌙" }}
      </button>
    </header>

    <main style="padding: 1rem">
      <slot />
    </main>
    <footer>
      <p>&copy; 2026 Mein Projekt</p>
    </footer>
  </div>
</template>
