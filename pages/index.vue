<script setup lang="ts">
import { computed } from "vue";

interface StatsResponse {
  monthlyBudget: number;
  updatedAt: string;
}

const { data: stats } = await useAsyncData<StatsResponse>("stats", () =>
  $fetch("/api/stats")
);

const store = useFinanceStore();

// Logik für die Anzeige
const balanceColor = computed(() =>
  store.balance >= 0 ? "text-green-500" : "text-red-500"
);

const progressValue = computed(() => {
  if (!stats.value?.monthlyBudget) return 0;
  const percentage = (store.balance / stats.value.monthlyBudget) * 100;
  return Math.min(Math.max(percentage, 0), 100); // Begrenzt auf 0-100% für die UI
});

// Formatierung über dein Composable
const formattedBalance = useCurrency(store.balance);
const formattedBudget = useCurrency(stats.value?.monthlyBudget || 0);
</script>

<template>
  <UContainer class="py-8">
    <header class="mb-8">
      <h1 class="text-3xl font-bold">FinancePulse Dashboard</h1>
      <p class="text-gray-500">
        Stand: {{ stats?.updatedAt || "Wird geladen..." }}
      </p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <UCard>
        <template #header>
          <span class="font-semibold">Gesamtsaldo</span>
        </template>
        <div class="text-4xl font-mono tracking-tight" :class="balanceColor">
          {{ formattedBalance }}
        </div>
      </UCard>

      <UCard>
        <template #header>
          <span class="font-semibold">Monatsziel</span>
        </template>
        <div class="text-4xl font-mono">{{ formattedBudget }}</div>
        <UProgress :value="progressValue" color="primary" class="mt-4" />
      </UCard>
    </div>

    <section class="mt-12">
      <h2 class="text-xl font-semibold mb-4">Letzte Buchungen</h2>
      <div class="space-y-2">
        <div
          v-for="t in store.transactions"
          :key="t.id"
          class="p-4 bg-white dark:bg-gray-800 border rounded-lg flex justify-between items-center"
        >
          <span>{{ t.description }}</span>
          <UBadge
            :color="t.type === 'in' ? 'success' : 'error'"
            variant="subtle"
          >
            {{ t.type === "in" ? "+" : "-" }} {{ t.amount }}€
          </UBadge>
        </div>

        <!-- Nachricht falls keine Daten da sind -->
        <p v-if="store.transactions.length === 0" class="text-gray-500 italic">
          Noch keine Buchungen vorhanden.
        </p>
      </div>
    </section>
  </UContainer>
</template>
