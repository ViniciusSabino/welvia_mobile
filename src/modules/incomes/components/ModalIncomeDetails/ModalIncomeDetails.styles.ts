import { StyleSheet } from 'react-native';

import { ChartData } from '@/shared/components/PieChart/PieChart.types';
import { darkColors, fonts, fontSizes, spacing } from '@/shared/themes';

export const createStyle = (currentIncomeTypeChartData: ChartData | undefined) =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modal: {
      alignItems: 'center',
      backgroundColor: darkColors.highlight,
      borderRadius: 20,
      flexDirection: 'column',
      elevation: 5,
      height: '45%',
      width: '90%',
      shadowColor: darkColors.surface,
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },
    header: {
      alignSelf: 'stretch',
      flexDirection: 'column',
      height: 80,
    },
    categoryHeader: {
      backgroundColor: currentIncomeTypeChartData?.color,
      height: 20,
    },
    categoryTextContent: {
      alignContent: 'center',
      flexDirection: 'row',
      gap: spacing.md,
      justifyContent: 'center',
      paddingTop: spacing.md,
    },
    categoryText: {
      color: darkColors.primary,
      fontSize: fontSizes.h3,
      fontFamily: fonts.regular,
      textTransform: 'uppercase',
    },
    body: {
      alignSelf: 'stretch',
      flex: 1,
    },
    inputArea: {
      alignItems: 'center',
      flexDirection: 'row',
      gap: spacing.lg,
      paddingBottom: spacing.md,
      paddingLeft: spacing.md,
      paddingRight: spacing.md,
    },
    textInputLabel: {
      color: darkColors.primary,
      fontFamily: fonts.regular,
      fontSize: fontSizes.body,
    },
    textInput: {
      borderColor: darkColors.divider,
      borderBottomWidth: 2,
      color: darkColors.textPrimary,
      flex: 1,
      fontFamily: fonts.regular,
      fontSize: fontSizes.body,
    },
    footer: {
      alignSelf: 'stretch',
      flexDirection: 'row',
    },
    textSave: {
      color: darkColors.primary,
      fontFamily: fonts.regular,
      fontSize: fontSizes.body,
    },
    buttonSave: {
      flex: 1,
      justifyContent: 'center',
      paddingLeft: spacing.md,
    },
    buttonClose: {
      padding: spacing.sm,
      paddingRight: spacing.md,
    },
  });
