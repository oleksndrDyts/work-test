import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';

import { fetchBonuses, getTodayBonus } from 'redux/bonus/bonus-operations';

import AppBar from 'components/AppBar';
import BurgerMenu from 'components/BurgerMenu';
import { MainContainer } from 'components/common.styled';
import UserInfo from 'components/UserInfo';

const Layout = () => {
  const dispatch = useDispatch();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width:514px)' });

  const burgerToggle = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const setBurgerClosed = () => {
    setIsBurgerOpen(false);
  };

  useEffect(() => {
    dispatch(fetchBonuses());
    dispatch(getTodayBonus());
  }, [dispatch]);
  return (
    <>
      <div>
        <LayoutContainer>
          {isMobile ? (
            <BurgerMenu
              isOpen={isBurgerOpen}
              setBurgerClosed={setBurgerClosed}
            />
          ) : (
            <AppBar />
          )}
          <UserInfo isOpen={isBurgerOpen} burgerToggle={burgerToggle} />
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
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 85px;

  /* position: relative; */
  top: -38px;

  flex-grow: 1;

  /* margin-top: 10px; */

  background-color: #e1e4eb;
  /* background-color: red; */
  border-radius: 4px;

  height: 85vh;

  @media screen and (min-width: 515px) {
    margin-left: 9.3rem;
    margin-top: 0;
  }

  @media screen and (min-width: 828px) {
    margin-left: 13rem;
  }
`;
