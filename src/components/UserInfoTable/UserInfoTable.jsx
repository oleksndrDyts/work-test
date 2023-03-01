import TableCommon from 'components/TableCommon';

const UserInfoTable = ({ items }) => {
  const init = {
    head: ['Товар', 'Бонус', 'Дата', 'Вага'],
    initItems: [
      { label: 'Товар', value: 'goods' },
      { label: 'Бонус', value: 'bonus' },
      { label: 'Дата', value: ['dateData', 'date'], obj: true },
      { label: 'Вага', value: 'weight' },
    ],
  };

  //   console.log(format(items[0].date, 'dd MM yyyy, HH:mm'));

  return (
    <TableCommon
      init={init}
      items={items.map(el => ({
        ...el,
        weight:
          el.goods === 'Miocane' || el.goods === 'Miogato'
            ? '-'
            : el.bonus / 20,
      }))}
    />
  );
};

export default UserInfoTable;
