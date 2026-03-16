import { useQuery } from '@tanstack/react-query';

import { IncomeResponse } from '../schemas/income.schema';
import incomesService from '@/core/api/incomesService';

export const useCurrentIncomes = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['incomes'],
    queryFn: () => incomesService.getCurrentIncomes('03', '2026').then((r) => r.data),
  });

  const incomes = data as IncomeResponse[];

  return { incomes, isLoading, isError, error };
};
