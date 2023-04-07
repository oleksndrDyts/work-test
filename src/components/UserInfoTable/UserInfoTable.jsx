import TableCommon from 'components/TableCommon';

import { getTodayDate } from 'utils/getTodayDate';

const UserInfoTable = ({ items, dateToFetch }) => {
  // console.log(206.2 / 20);

  const dateData =
    dateToFetch === getTodayDate()
      ? { label: 'Час', value: ['dateData', 'hours'], obj: true }
      : { label: 'Дата', value: ['dateData', 'date'], obj: true };

  const init = {
    initItems: [
      { label: 'Товар', value: 'goods' },
      { label: 'Бонус', value: 'bonus' },
      dateData,
      { label: 'Вага', value: 'weight' },
    ],
  };

  //   console.log(format(items[0].date, 'dd MM yyyy, HH:mm'));

  return (
    <TableCommon
      init={init}
      items={items}
      // items={items.map(el => ({
      //   ...el,
      //   weight:
      //     el.goods === 'Miocane' || el.goods === 'Miogato'
      //       ? '-'
      //       : el.bonus / 20,
      // }))}
    />
  );
};

export default UserInfoTable;
