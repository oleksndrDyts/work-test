import instance from './auth';

export const getBonuses = async date => {
  const url = !date ? '/bonus' : `/bonus?date=${date}`;
  // const url = !date ? '/bonus' : `/bonus?date=1`;
  const { data } = await instance.get(url);
  return data;
};

export const addBonus = async credentials => {
  const { data } = await instance.post('/bonus', credentials);
  return data;
};

export const getTodayBonus = async () => {
  const { data } = await instance.get('/bonus/todaybonus');
  return data;
};
