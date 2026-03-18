export class DateUtil {
  static formatISODateToBR = (isoDate: string | null | undefined): string => {
    if (!isoDate) return '';

    const [, month, day] = isoDate.split('-');
    return `${day}/${month}`;
  };

  static isFutureDate = (isoDate: string | null | undefined): boolean => {
    if (!isoDate) return false;

    const date = new Date(isoDate);

    if (isNaN(date.getTime())) return false;

    return date > new Date();
  };

  static diffInDays = (isoDate: string | null | undefined): number => {
    if (!isoDate) return 0;

    const date = new Date(isoDate);

    if (isNaN(date.getTime())) return 0;

    const today = new Date(new Date().toISOString().split('T')[0]);
    const target = new Date(isoDate.split('T')[0]);

    const MS_PER_DAY = 1000 * 60 * 60 * 24;

    return Math.round((target.getTime() - today.getTime()) / MS_PER_DAY);
  };
}
