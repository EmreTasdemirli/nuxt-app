<script setup lang="ts">
import { ref, onMounted } from "vue";

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  // Status im Browser speichern, damit er beim Neuladen erhalten bleibt
  if (isDarkMode.value) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
};

onMounted(() => {
  // Beim Laden prüfen, was im Speicher steht
  if (localStorage.getItem("darkMode") === "enabled") {
    isDarkMode.value = true;
  }
});
</script>

<template>
  <div>
    <!-- Ihre globale Navigationsleiste mit Links -->
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
        class="p-2 ml-4 bg-gray-300 dark:bg-gray-700 rounded"
      >
        {{ isDarkMode ? "Light Mode ☀️" : "Dark Mode 🌙" }}
      </button>
    </header>

    <!-- Der Inhalt der jeweiligen Seite (index.vue, about.vue, etc.) wird hier geladen -->
    <main style="padding: 1rem">
      <slot />
    </main>

    <!-- Optional: Globaler Footer -->
    <footer>
      <p>&copy; 2026 Mein Projekt</p>
    </footer>
  </div>
</template>
