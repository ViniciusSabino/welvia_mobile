import { View } from 'react-native';

import { styles } from './IncomesScreen.styles';
import { EstimatedReleases } from '../components/EstimatedReleases/EstimatedReleases';
import { CurrentIncomes } from '../components/CurrentIncomes/CurrentIncomes';
import { Divider } from '@shared/components/Divider/Divider';
import { useCurrentIncomes } from '../hooks/useCurrentIncomes';

export function IncomesScreen() {
  const { incomes, isLoading, error } = useCurrentIncomes();

  return (
    <View style={styles.container}>
      <CurrentIncomes incomes={incomes} isLoading={isLoading} error={error} />
      <Divider />
      <EstimatedReleases />
    </View>
  );
}
