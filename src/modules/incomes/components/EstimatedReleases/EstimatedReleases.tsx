import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './EstimatedReleases.styles';
import { PieChart } from '@/shared/components/PieChart/PieChart';
import { ChartData } from '@/shared/components/PieChart/PieChart.types';
import { EstimatedReleasesProps, SummaryPerType } from './EstimatedReleases.types';
import { AmountUtil } from '@/shared/utils/amount.util';
import { darkColors } from '@/shared/themes';
import { useIncomesScreenStore } from '../../screens/IncomesScreenStore';

export function EstimatedReleases(props: EstimatedReleasesProps) {
  const { summaryIncomes, isLoading } = props;

  const [incomeTypeChartData, setIncomeTypeChartDataState] = useState<Array<ChartData>>([]);

  const setIncomeTypeChartDataStore = useIncomesScreenStore((state) => state.setIncomeTypeChartData);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total Estimado para o Mês</Text>
      <Text style={styles.totalText}>
        {isLoading ? AmountUtil.formatAmount(0) : AmountUtil.formatAmount(summaryIncomes.totalExpected)}
      </Text>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={darkColors.primary} style={styles.loading} />
      ) : (
        <>
          <View style={styles.chartContainer}>
            <PieChart<SummaryPerType>
              data={summaryIncomes.summariesPerType}
              accessor="amount"
              height={255}
              legendField="type"
              getPierChartData={(pieChartData: Array<ChartData>) => {
                setIncomeTypeChartDataState(pieChartData);
                setIncomeTypeChartDataStore(pieChartData);
              }}
            ></PieChart>
          </View>
          <FlatList
            scrollEnabled={false}
            data={incomeTypeChartData}
            renderItem={({ item }) => (
              <View style={styles.legendRow} key={item.label}>
                <View style={styles.legendColor}>
                  <MaterialIcons name="circle" size={28} color={item.color} />
                </View>
                <View style={styles.legendPercentage}>
                  <Text style={styles.legendText}>{item.percentage}</Text>
                </View>
                <View style={styles.legendItem}>
                  <Text style={styles.legendText}>
                    {AmountUtil.formatAmount(item.value)}
                    {''}
                  </Text>
                </View>
                <View style={styles.legendItem}>
                  <Text style={styles.legendText}>{item.label}</Text>
                </View>
              </View>
            )}
          ></FlatList>
        </>
      )}
    </View>
  );
}
