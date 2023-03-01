import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { addBonus } from 'redux/bonus/bonus-operations';
import { isFetching } from 'redux/bonus/bonus-selectors';

import AddBonusForm from 'components/AddBonusForm';
import AddCheck from 'components/AddCheck';
import Spinner from 'components/Spinner';

const AddBonusPage = () => {
  const isLoadings = useSelector(isFetching);
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  const onAddBonus = () => {
    dispatch(addBonus({ items }));

    setItems([]);
  };

  const setItemsState = item => {
    setItems(prev => [item, ...prev]);
  };

  const deleteItem = id => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <>
      <PageContainer>
        <AddCheck
          items={items}
          deleteItem={deleteItem}
          onAddBonus={onAddBonus}
        />
        <AddBonusForm setItemsState={setItemsState} />
      </PageContainer>
      {isLoadings && <Spinner dep={isLoadings} />}
    </>
  );
};

export default AddBonusPage;

const PageContainer = styled.div`
  @media screen and (min-width: 828px) {
    display: flex;
    justify-content: space-between;
  }
`;
