import z from 'zod';

import { IncomeListSchema, IncomeSchema, PaginatedIncomesSchema } from '../../schemas/income.schema';

type CurrentIncomesProps = {
  incomes: Array<Income>;
  isLoading: boolean;
  error: Error | null;
  setModalIncomeVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

type Income = z.infer<typeof IncomeSchema>;
type Incomes = z.infer<typeof IncomeListSchema>;
type PaginatedIncomesResponse = z.infer<typeof PaginatedIncomesSchema>;

export type { CurrentIncomesProps, Income, Incomes, PaginatedIncomesResponse };
