import Decimal from 'decimal.js';

export class PercentageUtil {
  static calculatePercentage = (value: number, total: number): string => {
    if (total == null || value == null) {
      return '0%';
    }

    const decimalValue = new Decimal(value);
    const decimalTotal = new Decimal(total);

    if (decimalTotal.equals(0)) {
      return '0%';
    }

    return decimalValue.dividedBy(decimalTotal).times(100).toDecimalPlaces(0, Decimal.ROUND_HALF_UP).toString() + '%';
  };
}
