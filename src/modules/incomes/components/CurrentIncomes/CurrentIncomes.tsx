import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

import { styles } from './CurrentIncomes.styles';
import { CurrentIncomesColumns, IncomeStatus } from './CurrentIncomes.constants';
import { CurrentIncomesProps } from './CurrentIncomes.types';
import { darkColors } from '@/shared/themes';

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
        {props.isLoading ? (
          <ActivityIndicator
            size={'large'}
            color={darkColors.primary}
            style={styles.loading}
          />
        ) : (
          <FlatList
            data={props.incomes.filter((i) => i.status == IncomeStatus.RECEIVED)}
            renderItem={({ item }) => (
              <TouchableHighlight onPress={() => alert('teste')}>
                <View style={styles.row}>
                  <View style={styles.income}>
                    <Text style={styles.incomeText}>{item.date}</Text>
                  </View>
                  <View style={styles.income}>
                    <Text style={styles.incomeText}>{item.amount}</Text>
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
