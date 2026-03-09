import { View, Text, FlatList } from 'react-native';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './EstimatedReleases.styles';
import { PieChart } from '@/shared/components/PieChart/PieChart';
import { PieChartLegend } from '@/shared/components/PieChart/PieChart.types';
import { Release } from './EstimatedReleases.types';
import { AmountUtil } from '@/shared/utils/amount.util';

const data: Array<Release> = [
  {
    name: 'Salário',
    amount: 8000,
  },
  {
    name: 'Freelancer',
    amount: 1000,
  },
  {
    name: 'Décimo',
    amount: 7000,
  },
  {
    name: 'PLR',
    amount: 500,
  },
  {
    name: 'Outros',
    amount: 2000,
  },
];

export function EstimatedReleases() {
  const [pieChartLegend, setPieChartLegend] = useState([] as Array<PieChartLegend>);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lançamentos Estimados do Mês</Text>
      <Text style={styles.totalText}>
        {AmountUtil.formatAmount(
          pieChartLegend.reduce((acc, item) => {
            return acc + item.value;
          }, 0),
        )}
      </Text>
      <View>
        <View style={styles.chartContainer}>
          <PieChart<Release>
            data={data}
            accessor="amount"
            height={255}
            legendField="name"
            getPierChartLegend={(pieChartLegend: Array<PieChartLegend>) => {
              setPieChartLegend(pieChartLegend);
            }}
          ></PieChart>
        </View>
        <FlatList
          data={pieChartLegend}
          renderItem={({ item }) => (
            <View style={styles.legendRow} key={item.label}>
              <View style={styles.legendColorBody}>
                <MaterialIcons name="circle" size={28} color={item.color} />
              </View>
              <View style={styles.legendItemBody}>
                <Text style={styles.legendText}>{item.percentage}</Text>
              </View>
              <View style={styles.legendItemBody}>
                <Text style={styles.legendText}>
                  {AmountUtil.formatAmount(item.value)}
                  {''}
                </Text>
              </View>
              <View style={styles.legendItemBody}>
                <Text style={styles.legendText}>{item.label}</Text>
              </View>
            </View>
          )}
        ></FlatList>
      </View>
    </View>
  );
}
