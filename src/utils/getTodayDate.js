import { formatDate } from './formatDate';

export const getTodayDate = () => {
  return formatDate(Date.now());
};
