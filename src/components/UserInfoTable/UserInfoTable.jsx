import TableCommon from 'components/TableCommon';

const UserInfoTable = ({ items }) => {
  const init = {
    head: ['Товар', 'Бонус', 'Дата'],
    initItems: [
      { label: 'Товар', value: 'goods' },
      { label: 'Бонус', value: 'bonus' },
      { label: 'Дата', value: ['dateData', 'date'], obj: true },
    ],
  };

  //   console.log(format(items[0].date, 'dd MM yyyy, HH:mm'));

  return <TableCommon init={init} items={items} />;
};

export default UserInfoTable;
