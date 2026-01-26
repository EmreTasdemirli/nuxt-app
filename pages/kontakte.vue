<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">Kontakt</h1>

    <!-- Das Formular -->
    <form @submit.prevent="handleSubmit" class="mt-4">
      <input
        type="email"
        placeholder="Ihre E-Mail"
        class="border p-2 rounded"
        required
      />
      <button
        type="submit"
        class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Senden
      </button>
    </form>

    <!-- Statusmeldungen (konditionell gerendert) -->
    <div
      v-if="formStatus === 'success'"
      class="mt-4 p-4 bg-green-100 text-green-700 border border-green-400 rounded"
    >
      Nachricht erfolgreich gesendet!
    </div>
    <div
      v-if="formStatus === 'error'"
      class="mt-4 p-4 bg-red-100 text-red-700 border border-red-400 rounded"
    >
      Fehler beim Senden. Bitte versuchen Sie es erneut.
    </div>
  </div>

  <AppButton @click="handleDelete">
    <span class="mr-2">🗑️</span> Löschen
  </AppButton>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Status kann 'idle', 'success' oder 'error' sein
const formStatus = ref("idle");

const handleSubmit = async () => {
  // Simulieren Sie eine API-Anfrage (ersetzen Sie dies durch Ihre tatsächliche Logik)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Setzen Sie den Status basierend auf dem Ergebnis
  const success = true; // In realem Code: Prüfen Sie das API-Ergebnis

  if (success) {
    formStatus.value = "success";
  } else {
    formStatus.value = "error";
  }
};

const handleDelete = () => {
  console.log("Eintrag wurde gelöscht!");
};
</script>
