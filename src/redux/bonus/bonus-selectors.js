import { structureBonuses } from 'utils/structureBonuses';

export const getBonuses = ({ bonus }) => {
  const res = [...bonus.items];

  res.sort((a, b) => {
    return (
      Number(
        b.dateData.date.split('.').join('') +
          b.dateData.hours.split(':').join('')
      ) -
      Number(
        a.dateData.date.split('.').join('') +
          a.dateData.hours.split(':').join('')
      )
    );
  });

  return res;
};

export const getBonusAmount = store => {
  // console.log(store);
  return store.bonus.todayBonus;
};

export const getStucturedBonuses = ({ bonus }) => {
  console.log(bonus.detailedItems);

  if (bonus.detailedItems.length !== 0) {
    return structureBonuses(bonus.detailedItems);
  }

  return structureBonuses(bonus.items);
};

export const getIsLoading = ({ bonus }) => bonus.loading;

export const isFetching = ({ bonus }) => bonus.isFetching;

export const getError = ({ bonus }) => bonus.error;
