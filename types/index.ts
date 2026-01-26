import { z } from "zod";

export const TransactionSchema = z.object({
  id: z.string().uuid(),
  description: z.string().min(3, "Beschreibung zu kurz"),
  amount: z.number().refine((val) => val !== 0, {
    message: "Betrag darf nicht 0 sein",
  }),
  type: z.enum(["in", "out"]),
  category: z.string(),
  createdAt: z.date(),
});

export type Transaction = z.infer<typeof TransactionSchema>;
