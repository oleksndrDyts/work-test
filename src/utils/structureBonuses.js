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

  result.push({
    goods: 'Загалом',
    bonus: parseInt(total * 100) / 100,
    _id: 'total',
  });
  return result;
};
// ============================================================
export const structureWeight = items => {
  let result = [];
  const obj = {};

  items.forEach(el => {
    if (!obj[el.goods]) {
      // console.log(el.weight);
      obj[el.goods] = el.weight;
    } else {
      // console.log(obj[el.weight]);
      obj[el.goods] = sum(obj[el.goods], el.weight);
    }
  });

  for (const goods in obj) {
    if (Object.hasOwnProperty.call(obj, goods)) {
      const weight = obj[goods];
      result.push({ goods, weight, _id: goods });
    }
  }

  const total = result.reduce((acc, el) => (acc += el.weight), 0);

  result.push({
    goods: 'Загалом',
    weight: parseInt(total * 100) / 100,
    _id: 'total',
  });
  return result;
};
