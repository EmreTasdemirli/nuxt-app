import type { Transaction } from "~/types";
import { defineStore } from "pinia";

export const useFinanceStore = defineStore("finance", () => {
  const transactions = ref<Transaction[]>([]);

  const balance = computed<number>(() =>
    transactions.value.reduce(
      (acc, t) => (t.type === "in" ? acc + t.amount : acc - t.amount),
      0
    )
  );

  function addTransaction(payload: Omit<Transaction, "id" | "createdAt">) {
    const newTransaction: Transaction = {
      ...payload,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    transactions.value.push(newTransaction);
  }

  return { transactions, balance, addTransaction };
});
