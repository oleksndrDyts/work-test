import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBonuses, getTodayBonus } from 'redux/bonus/bonus-operations';
import { getIsLoading } from 'redux/user/user-selectors';

import AppBar from 'components/AppBar';
import { Outlet } from 'react-router-dom';

import { MainContainer } from 'components/common.styled';
import UserInfo from 'components/UserInfo';

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBonuses());
    dispatch(getTodayBonus());
  }, [dispatch]);
  return (
    <>
      <div>
        <LayoutContainer>
          <AppBar />
          <UserInfo />
        </LayoutContainer>

        <Main>
          <MainContainer>
            <Outlet />
          </MainContainer>
        </Main>
      </div>
    </>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  display: flex;

  padding-top: 10px;
  padding-left: 10px;
`;

const Main = styled.main`
  position: relative;
  /* flex-grow: 1; */
  /* width: 95%; */
  margin-left: 225px;
  margin-right: 15px;

  /* position: relative; */
  top: -38px;

  flex-grow: 1;

  /* margin-top: 10px; */

  background-color: #e1e4eb;
  /* background-color: red; */
  border-radius: 4px;

  height: 85vh;
`;
