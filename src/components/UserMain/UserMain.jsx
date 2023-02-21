import styled from 'styled-components';

import { MainContainer } from 'components/common.styled';

const UserMain = () => {
  return (
    <UserMainContainer>
      <MainContainer>dwdfq</MainContainer>
    </UserMainContainer>
  );
};

export default UserMain;

const UserMainContainer = styled.div`
  position: relative;
  top: -38px;

  flex-grow: 1;

  /* margin-top: 10px; */

  background-color: #e1e4eb;
  /* background-color: red; */
  border-radius: 4px;
`;
