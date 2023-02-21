import { useSelector } from 'react-redux';
import { getBonusAmount } from 'redux/bonus/bonus-selectors';

import { sum } from './calc';

export const structureBonuses = items => {
  let result = [];
  const obj = {};

  items.forEach(el => {
    if (!obj[el.goods]) {
      obj[el.goods] = el.bonus;
    } else {
      obj[el.goods] = sum(obj[el.goods], el.bonus);
    }
  });

  for (const goods in obj) {
    if (Object.hasOwnProperty.call(obj, goods)) {
      const bonus = obj[goods];
      result.push({ goods, bonus, _id: goods });
    }
  }

  const total = result.reduce((acc, el) => (acc += el.bonus), 0);

  result.push({ goods: 'Загалом', bonus: total, _id: 'total' });
  return result;
};
