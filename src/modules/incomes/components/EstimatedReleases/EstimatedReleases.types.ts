import z from 'zod';

import { IncomesSummarySchema, summaryPerType } from '../../schemas/summaryIncomes.schema';

type EstimatedReleasesProps = {
  summaryIncomes: SummaryIncomes;
  isLoading: boolean;
  error: Error | null;
};

type SummaryIncomes = z.infer<typeof IncomesSummarySchema>;
type SummaryPerType = z.infer<typeof summaryPerType>;

export type { SummaryIncomes, SummaryPerType, EstimatedReleasesProps };
