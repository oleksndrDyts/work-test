import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from 'react';

import { getBonuses, getIsLoading } from 'redux/bonus/bonus-selectors';

import UserInfoTable from 'components/UserInfoTable';
import UserInfoDetaileSelect from 'components/UserInfoDetaileSelect';
import Spinner from 'components/Spinner';

import { structureBonuses } from 'utils/structureBonuses';
import UserInfoDetailedTable from 'components/UserInfoDetailedTable';
import { getTodayDate } from 'utils/getTodayDate';
import { fetchBonuses } from 'redux/bonus/bonus-operations';

const UserPage = () => {
  const loading = useSelector(getIsLoading);
  const bonuses = useSelector(getBonuses);
  const [dateToFetch, setDateToFetch] = useState(() => getTodayDate());
  const [isTodayDate, setIsTodayDate] = useState(true);
  const isTimeToFetchAfterComponentRemove = useRef(false);

  const str = structureBonuses(bonuses);
  const dispatch = useDispatch();
  console.log(str);

  const setDateForFetch = (date, changeBoolean) => {
    setIsTodayDate(changeBoolean);
    setDateToFetch(date);
    isTimeToFetchAfterComponentRemove.current =
      !isTimeToFetchAfterComponentRemove.current;
  };

  const isFirstRender = useRef(true);
  const fetchDate = getTodayDate() === dateToFetch ? '' : dateToFetch;
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    dispatch(fetchBonuses(fetchDate));
  }, [dateToFetch, dispatch, fetchDate]);

  useEffect(() => {
    return () => {
      if (isTimeToFetchAfterComponentRemove.current) {
        dispatch(fetchBonuses());
      }
    };
  }, [dispatch]);

  return (
    <>
      <PageContainer>
        <>
          <DetailedContainer>
            <UserInfoDetaileSelect
              setDateForFetch={setDateForFetch}
              isTodayDate={isTodayDate}
            />
            <UserInfoDetailedTable items={str} />
          </DetailedContainer>
          <AllBonusesContainer>
            <UserInfoTable items={bonuses} />
          </AllBonusesContainer>
        </>
        {loading && <Spinner dep={loading} />}
        {/* <Spinner dep={loading}></Spinner> */}
      </PageContainer>
    </>
  );
};

export default UserPage;

const PageContainer = styled.div`
  @media screen and (min-width: 828px) {
    display: flex;
    justify-content: space-between;
  }
  /* background-color: red; */
  /* min-height: calc(100vh - 108px); */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* overflow-y: scroll; */
  /* max-height: 80vh; */
  /* height: 100%; */

  /* background-color: #de9494; */
`;

const DetailedContainer = styled.div`
  @media screen and (max-width: 827px) {
    margin-bottom: 20px;
  }

  /* display: flex; */
`;

const AllBonusesContainer = styled.div`
  @media screen and (min-width: 828px) {
    padding-top: 39px;
  }
`;
