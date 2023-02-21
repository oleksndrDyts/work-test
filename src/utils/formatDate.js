import format from 'date-fns/format';

export const formatDate = date => {
  // console.log(date);
  return format(date, 'dd.MM.yyyy');
};
