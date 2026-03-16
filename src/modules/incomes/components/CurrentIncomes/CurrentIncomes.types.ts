import { IncomeResponse } from '../../schemas/income.schema';

type CurrentIncomesProps = {
  incomes: Array<IncomeResponse>;
  isLoading: boolean;
  error: Error | null;
};

export type { CurrentIncomesProps };
