import { View, Text, FlatList, TouchableHighlight } from 'react-native';

import { styles } from './CurrentIncomes.styles';

const COLUMN = {
  account: 'Conta',
  tipo: 'Tipo',
  amount: 'Valor',
  date: 'Data',
  description: 'Descrição',
};

const DATA = [
  {
    id: '1',
    account: 'C6 Bank',
    type: 'Salário',
    amount: 'R$ 900,00',
    date: '01/03/2026',
    description: 'Uma descrição aqui',
  },
  {
    id: '2',
    account: 'C6 Bank',
    type: 'Freelancer',
    amount: 'R$ 900,00',
    date: '01/03/2026',
    description: 'Uma descrição aqui',
  },
  {
    id: '3',
    account: 'C6 Bank',
    type: 'Décimo',
    amount: 'R$ 900,00',
    date: '01/03/2026',
    description: 'Uma descrição aqui',
  },
  {
    id: '4',
    account: 'C6 Bank',
    type: 'PLR',
    amount: 'R$ 900,00',
    date: '01/03/2026',
    description: 'Uma descrição aqui',
  },
  {
    id: '5',
    account: 'C6 Bank',
    type: 'Outros',
    amount: 'R$ 900,00',
    date: '01/03/2026',
    description: 'Uma descrição aqui',
  },
  {
    id: '6',
    account: 'C6 Bank',
    type: 'Outro',
    amount: 'R$ 900,00',
    date: '01/03/2026',
    description: 'Uma descrição aqui',
  },
  {
    id: '7',
    account: 'C6 Bank',
    type: 'Outro',
    amount: 'R$ 900,00',
    date: '01/03/2026',
    description: 'Uma descrição aqui',
  },
  {
    id: '8',
    account: 'C6 Bank',
    type: 'Outro',
    amount: 'R$ 900,00',
    date: '01/03/2026',
    description: 'Uma descrição aqui',
  },
];

export function CurrentIncomes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entradas de Março</Text>
      <View style={styles.headers}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{COLUMN.date}</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>{COLUMN.amount}</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>{COLUMN.tipo}</Text>
        </View>
      </View>
      <FlatList
        data={DATA}
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
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
