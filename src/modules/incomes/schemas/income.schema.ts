import { z } from 'zod';

export const IncomeSchema = z.object({
  id: z.number(),
  userId: z.number(),
  accountName: z.string(),
  type: z.string(),
  status: z.string(),
  recurrence: z.string(),
  amount: z.number(),
  date: z.iso.datetime(),
  receivedAt: z.iso.datetime().nullable(),
  description: z.string().nullable(),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});

export const IncomeListSchema = z.array(IncomeSchema);

export const PaginatedIncomesSchema = z.object({
  data: z.array(IncomeSchema),
  total: z.number(),
  page: z.number(),
  per_page: z.number(),
});

export type IncomeResponse = z.infer<typeof IncomeSchema>;
export type IncomesResponse = z.infer<typeof IncomeListSchema>;
export type PaginatedIncomesResponse = z.infer<typeof PaginatedIncomesSchema>;
