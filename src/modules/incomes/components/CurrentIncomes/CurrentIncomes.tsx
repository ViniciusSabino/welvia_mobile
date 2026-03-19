import { View, Text, FlatList, TouchableHighlight, ActivityIndicator } from 'react-native';

import { styles } from './CurrentIncomes.styles';
import { CurrentIncomesColumns } from './CurrentIncomes.constants';
import { CurrentIncomesProps } from './CurrentIncomes.types';
import { darkColors } from '@/shared/themes';
import { AmountUtil } from '@/shared/utils/amount.util';
import { DateUtil } from '@/shared/utils/date.util';
import { useIncomesScreenStore } from '../../screens/IncomesScreenStore';

export function CurrentIncomes(props: CurrentIncomesProps) {
  const { incomes, isLoading, setModalIncomeVisible } = props;

  const setCurrentIncomeDetails = useIncomesScreenStore((state) => state.setCurrentIncomeDetails);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entradas de Março</Text>
      <View style={styles.headers}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{CurrentIncomesColumns.date}</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>{CurrentIncomesColumns.amount}</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>{CurrentIncomesColumns.type}</Text>
        </View>
      </View>
      <View style={styles.body}>
        {isLoading ? (
          <ActivityIndicator size={'large'} color={darkColors.primary} style={styles.loading} />
        ) : (
          <FlatList
            data={incomes}
            renderItem={({ item }) => (
              <TouchableHighlight
                onPress={() => {
                  setCurrentIncomeDetails(item);
                  setModalIncomeVisible(true);
                }}
              >
                <View style={styles.row}>
                  <View style={styles.income}>
                    <Text style={styles.incomeText}>
                      {DateUtil.formatISODateToBR(item.date)}{' '}
                      {DateUtil.isFutureDate(item.date) && `(${DateUtil.diffInDays(item.date)}d)`}
                    </Text>
                  </View>
                  <View style={styles.income}>
                    <Text style={styles.incomeText}>{AmountUtil.formatAmount(item.amount)}</Text>
                  </View>
                  <View style={styles.income}>
                    <Text style={styles.incomeText}>{item.type}</Text>
                  </View>
                </View>
              </TouchableHighlight>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </View>
  );
}
