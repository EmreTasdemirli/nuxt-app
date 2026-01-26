export const useCurrency = (amount: Ref<number> | number) => {
  return computed(() => {
    const value = toValue(amount);
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(value);
  });
};
