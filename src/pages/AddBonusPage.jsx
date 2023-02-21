import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { addBonus, getTodayBonus } from 'redux/bonus/bonus-operations';
import { isLoading, isFetching, getError } from 'redux/bonus/bonus-selectors';

import AddBonusForm from 'components/AddBonusForm';
import AddCheck from 'components/AddCheck';
import Spinner from 'components/Spinner';

const AddBonusPage = () => {
  const err = useSelector(getError);
  const isLoadings = useSelector(isFetching);
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  // console.log(isLoadings);

  const onAddBonus = () => {
    dispatch(addBonus({ items }));
    // setTimeout(() => {
    //   dispatch(getTodayBonus());
    // }, 150);
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
  display: flex;
  align-items: start;
  justify-content: space-around;
`;
