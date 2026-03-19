import axiosInstance from '../config/axiosInstance';

const incomesService = {
  getCurrentIncomes: (month: string, year: string) => axiosInstance.get(`/api/incomes?month=${month}&year=${year}`),
  getIncomesSummary: (month: string, year: string) =>
    axiosInstance.get(`/api/summary/incomes?month=${month}&year=${year}`),
};

export default incomesService;
