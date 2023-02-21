import { Calc } from 'calc-js';

export const sum = (first, second) => {
  return new Calc(first).sum(second).finish();
};
