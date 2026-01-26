import { it, expect } from "vitest";
import { useCurrency } from "./useCurrency";
import { ref } from "vue";

it("formatiert eine positive Zahl korrekt als EUR Währung", () => {
  const amount = ref(1250.75);
  const formatted = useCurrency(amount);

  expect(formatted.value).toContain("1.250,75");
  expect(formatted.value).toContain("€");
});

it("handhabt negative Zahlen korrekt", () => {
  const amount = -50.0;
  const formatted = useCurrency(amount);

  expect(formatted.value).toContain("-50,00");
  expect(formatted.value).toContain("€");
});
