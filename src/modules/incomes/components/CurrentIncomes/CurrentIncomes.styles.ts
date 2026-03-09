import { StyleSheet } from 'react-native';

import { spacing, darkColors, fonts, fontSizes } from '@/shared/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacing.xs,
    paddingTop: spacing.sm,
  },
  title: {
    color: darkColors.textPrimary,
    fontFamily: fonts.bold,
    fontSize: fontSizes.body,
    margin: spacing.xs,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  headers: {
    flexDirection: 'row',
  },
  header: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    color: darkColors.textSecondary,
    fontFamily: fonts.bold,
    fontSize: fontSizes.body,
  },
  row: {
    flexDirection: 'row',
    gap: spacing.sm,
    paddingBottom: spacing.sm,
  },
  income: {
    alignItems: 'center',
    flex: 1,
    paddingBottom: spacing.md,
    paddingTop: spacing.md,
  },
  incomeText: {
    color: darkColors.textPrimary,
    fontFamily: fonts.regular,
    fontSize: fontSizes.body,
  },
});
