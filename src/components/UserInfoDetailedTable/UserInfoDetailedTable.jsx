import TableCommon from 'components/TableCommon';

const UserInfoDetailedTable = ({ items }) => {
  const init = {
    head: ['Товар', 'Бонус'],
    initItems: [
      { label: 'Товар', value: 'goods' },
      { label: 'Бонус', value: 'bonus' },
    ],
  };

  return <TableCommon items={items} init={init} lastItemColor />;
};

export default UserInfoDetailedTable;
