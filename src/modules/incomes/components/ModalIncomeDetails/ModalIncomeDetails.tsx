import {
  Modal,
  Pressable,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  TextInput,
  Switch,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { ModalIncomeDetailsProps } from './ModalIncomeDetails.types';
import { createStyle } from './ModalIncomeDetails.styles';
import { darkColors } from '@/shared/themes';
import { AmountUtil } from '@/shared/utils/amount.util';
import { useState } from 'react';

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

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={styles.inputArea}>
                  <Text style={styles.textInputLabel}>Recebido</Text>
                  <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
                <View style={styles.inputArea}>
                  <Text style={styles.textInputLabel}>Valor</Text>
                  <TextInput
                    placeholder="Valor"
                    inputMode="decimal"
                    style={styles.textInput}
                    value={AmountUtil.formatAmount(currentIncome?.amount)}
                  />
                </View>
                <View style={styles.inputArea}>
                  <Text style={styles.textInputLabel}>Data</Text>
                  <TextInput placeholder="Data" style={styles.textInput} value={currentIncome?.date} />
                </View>
                <View style={styles.inputArea}>
                  <Text style={styles.textInputLabel}>Conta</Text>
                  <TextInput placeholder="Conta" style={styles.textInput} value={currentIncome?.accountName} />
                </View>
                <View style={styles.inputArea}>
                  <Text style={styles.textInputLabel}>Tipo</Text>
                  <TextInput placeholder="Recorrência" style={styles.textInput} value={currentIncome?.recurrence} />
                </View>
                <View style={{ ...styles.inputArea }}>
                  <Text style={styles.textInputLabel}>Descrição</Text>
                  <TextInput
                    multiline={true}
                    placeholder="Descrição"
                    style={styles.textInput}
                    value={currentIncome?.description || ''}
                  />
                </View>
              </KeyboardAvoidingView>
            </View>
            <View style={styles.footer}>
              <View style={styles.buttonSave}>
                <Text style={styles.textSave}>Confirmar Alterações</Text>
              </View>
              <Pressable style={styles.buttonClose} onPress={() => setModalIncomeVisible(!modalIncomeVisible)}>
                <MaterialIcons name="close" size={35} color={darkColors.primary} />
              </Pressable>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
