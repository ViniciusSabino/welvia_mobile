import { useQuery } from '@tanstack/react-query';

import incomesService from '@/core/api/incomesService';
import { IncomesSummarySchema } from '../schemas/summaryIncomes.schema';
import { SummaryIncomes } from '../components/EstimatedReleases/EstimatedReleases.types';

export const useSummaryIncomes = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['incomesSummary'],
    queryFn: () => incomesService.getIncomesSummary('03', '2026').then((res) => IncomesSummarySchema.parse(res.data)),
  });

  const summaryIncomes = data as SummaryIncomes;

  return { summaryIncomes, isLoadingSummary: isLoading, useSummaryIncomesError: error };
};
