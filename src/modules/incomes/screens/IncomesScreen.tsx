import { View } from 'react-native';
import { useState } from 'react';

import { createStyle } from './IncomesScreen.styles';
import { EstimatedReleases } from '../components/EstimatedReleases/EstimatedReleases';
import { CurrentIncomes } from '../components/CurrentIncomes/CurrentIncomes';
import { Divider } from '@shared/components/Divider/Divider';
import { useCurrentIncomes } from '../hooks/useCurrentIncomes';
import { useSummaryIncomes } from '../hooks/useSummaryIncomes';
import { ModalIncomeDetails } from '../components/ModalIncomeDetails/ModalIncomeDetails';
import { useIncomesScreenStore } from './IncomesScreenStore';

export function IncomesScreen() {
  const [modalIncomeVisible, setModalIncomeVisible] = useState(false);

  const styles = createStyle(modalIncomeVisible);

  const currentIncomeDetails = useIncomesScreenStore((state) => state.currentIncomeDetails);
  const incomeTypeChartData = useIncomesScreenStore((state) => state.incomeTypeChartData);

  const { incomes, isLoadingCurrentIncomes, useCurrentIncomesError } = useCurrentIncomes();

  const { summaryIncomes, isLoadingSummary, useSummaryIncomesError } = useSummaryIncomes();

  return (
    <>
      <ModalIncomeDetails
        currentIncome={currentIncomeDetails}
        incomeTypeChartData={incomeTypeChartData}
        modalIncomeVisible={modalIncomeVisible}
        setModalIncomeVisible={setModalIncomeVisible}
      ></ModalIncomeDetails>
      <View style={styles.container}>
        <CurrentIncomes
          incomes={incomes}
          isLoading={isLoadingCurrentIncomes}
          error={useCurrentIncomesError}
          setModalIncomeVisible={setModalIncomeVisible}
        />
        <Divider />
        <EstimatedReleases
          summaryIncomes={summaryIncomes}
          isLoading={isLoadingSummary}
          error={useSummaryIncomesError}
        />
      </View>
    </>
  );
}
