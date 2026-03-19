import { Modal, Pressable, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { ModalIncomeDetailsProps } from './ModalIncomeDetails.types';
import { createStyle } from './ModalIncomeDetails.styles';
import { darkColors } from '@/shared/themes';

const renderIncomeTypeIcon = (incomeType: string | undefined) =>
  new Map([
    ['Empresarial', <MaterialIcons name="work" size={24} color={darkColors.primary} />],
    ['Variável', <MaterialIcons name="360" size={24} color={darkColors.primary} />],
    ['Salário', <MaterialIcons name="payments" size={24} color={darkColors.primary} />],
    ['Investimentos', <MaterialIcons name="currency-bitcoin" size={24} color={darkColors.primary} />],
    ['Bônus', <MaterialIcons name="upgrade" size={24} color={darkColors.primary} />],
    ['Outros', <MaterialIcons name="drag-indicator" size={24} color={darkColors.primary} />],
    [undefined, <MaterialIcons name="disabled-by-default" size={24} color={darkColors.primary} />],
  ]).get(incomeType);

export function ModalIncomeDetails(props: ModalIncomeDetailsProps) {
  const { currentIncome, incomeTypeChartData, modalIncomeVisible, setModalIncomeVisible } = props;

  const currentTypeChartData = incomeTypeChartData.find((income) => income.label == currentIncome?.type);

  const styles = createStyle(currentTypeChartData);

  return (
    <Modal
      animationType="slide"
      backdropColor={darkColors.background}
      transparent={true}
      visible={modalIncomeVisible}
      onRequestClose={() => {
        setModalIncomeVisible(false);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <View style={styles.categoryHeader}></View>
            <View style={styles.categoryTextContent}>
              {renderIncomeTypeIcon(currentIncome?.type)}
              <Text style={styles.categoryText}>{currentIncome?.type}</Text>
            </View>
          </View>
          <View style={styles.body}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalIncomeVisible(!modalIncomeVisible)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
