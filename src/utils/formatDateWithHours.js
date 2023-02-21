import format from 'date-fns/format';
import { formatDate } from './formatDate';

export const formatDateWithHours = date => {
  return {
    date: formatDate(date),
    hours: format(date, 'kk:mm:ss'),
  };
};
