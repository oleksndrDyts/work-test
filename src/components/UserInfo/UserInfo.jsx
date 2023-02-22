import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getBonusAmount } from 'redux/bonus/bonus-selectors';
import { useMediaQuery } from 'react-responsive';

import { BurgerMenuBtn } from 'components/BurgerMenu/BurgerMenu';

import { Text } from 'components/common.styled';
import { getUserName } from 'redux/user/user-selectors';

const UserInfo = ({ isOpen, burgerToggle }) => {
  const isMobile = useMediaQuery({ query: '(max-width:514px)' });
  const bonus = useSelector(getBonusAmount);
  const name = useSelector(getUserName);

  return (
    <InfoBar>
      {isMobile && (
        <BurgerMenuBtn isOpen={isOpen} burgerToggle={burgerToggle} />
      )}
      <Text>{name}</Text>
      <Text>Бонуси сьогодні: {bonus}</Text>
    </InfoBar>
  );
};

export default UserInfo;

const InfoBar = styled.div`
  position: fixed;
  flex-grow: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: 5px;
  margin-right: 15px;

  padding-left: 15px;
  padding-right: 15px;

  height: 39px;
  background-color: #2da0e8;
  border-radius: 4px;
  width: 91%;

  z-index: 500;
  /* padding-right: 200px; */

  @media screen and (min-width: 515px) {
    position: relative;
    padding-left: 15px;
  }
`;
