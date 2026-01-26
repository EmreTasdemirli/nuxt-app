<template>
  <div
    class="flex flex-col items-center justify-center h-screen bg-gray-50 dark:bg-gray-900"
  >
    <h1 class="text-9xl font-extrabold text-primary mb-4">
      {{ error.statusCode }}
    </h1>
    <h2 class="text-2xl font-semibold mb-6 dark:text-white">
      {{ error.statusMessage || "Ein Fehler ist aufgetreten" }}
    </h2>
    <UButton @click="handleClearError">Zurück zum Dashboard</UButton>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
});

useHead({
  title: `Fehler ${props.error.statusCode} | Mein Projekt`,
});

const handleClearError = () => {
  clearError({ redirect: "/" });
};
</script>
