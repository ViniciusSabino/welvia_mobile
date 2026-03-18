type PieChartConfig = {
  legendFontColor: string;
  legendFontSize: number;
};

type ChartLegend = {
  label: string;
  color: string;
  value: number;
  percentage: string;
};

type PieChartProps<A> = {
  data: Array<A>;
  accessor: string;
  height: number;
  legendField: string;
  getPierChartLegend: (pieChartInfo: Array<ChartLegend>) => void;
};

export type { PieChartConfig, PieChartProps, ChartLegend };
