import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getBonusAmount } from 'redux/bonus/bonus-selectors';

import { Text } from 'components/common.styled';
import { getUserName } from 'redux/user/user-selectors';

const UserInfo = () => {
  const bonus = useSelector(getBonusAmount);
  const name = useSelector(getUserName);

  return (
    <InfoBar>
      <Text>{name}</Text>
      <Text>Бонуси сьогодні: {bonus}</Text>
    </InfoBar>
  );
};

export default UserInfo;

const InfoBar = styled.div`
  flex-grow: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: 15px;
  margin-right: 15px;

  padding-left: 15px;
  padding-right: 15px;

  height: 39px;
  background-color: #2da0e8;
  border-radius: 4px;
  /* width: 100%; */
  /* padding-right: 200px; */
`;
