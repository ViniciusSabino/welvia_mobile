import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

import { styles } from './CurrentIncomes.styles';
import { CurrentIncomesColumns } from './CurrentIncomes.constants';
import { CurrentIncomesProps, Income } from './CurrentIncomes.types';
import { darkColors } from '@/shared/themes';
import { AmountUtil } from '@/shared/utils/amount.util';
import { DateUtil } from '@/shared/utils/date.util';

const renderLoading = () => (
  <ActivityIndicator size={'large'} color={darkColors.primary} style={styles.loading} />
);

const renderCurrentIncomesList = (incomes: Income[]) => (
  <FlatList
    data={incomes}
    renderItem={({ item }) => {
      const isFutureIncome = DateUtil.isFutureDate(item.date);

      return (
        <TouchableHighlight onPress={() => alert('teste')}>
          <View style={styles.row}>
            <View style={styles.income}>
              <Text style={isFutureIncome ? styles.futureIncomeText : styles.incomeText}>
                {DateUtil.formatISODateToBR(item.date)}{' '}
                {isFutureIncome && `(${DateUtil.diffInDays(item.date)}d)`}
              </Text>
            </View>
            <View style={styles.income}>
              <Text style={styles.incomeText}>
                {AmountUtil.formatAmount(item.amount)}
              </Text>
            </View>
            <View style={styles.income}>
              <Text style={styles.incomeText}>{item.type}</Text>
            </View>
          </View>
        </TouchableHighlight>
      );
    }}
    keyExtractor={(item) => item.id.toString()}
  />
);

export function CurrentIncomes(props: CurrentIncomesProps) {
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
        {props.isLoading ? renderLoading() : renderCurrentIncomesList(props.incomes)}
      </View>
    </View>
  );
}
