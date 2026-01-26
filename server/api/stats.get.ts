export default defineEventHandler(async (event) => {
  return {
    monthlyBudget: 2500,
    savingsGoal: 5000,
    updatedAt: new Date().toISOString(),
  };
});
