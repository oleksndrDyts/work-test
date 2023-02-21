import styled from 'styled-components';
import { getTodayDate } from 'utils/getTodayDate';

import DatePicker from 'components/DatePicker';

const UserInfoDetaileSelect = ({ setDateForFetch, isTodayDate }) => {
  return (
    <ComponentContainer>
      <Text>Дані за:</Text>
      <TodayBtn
        type="button"
        onClick={() => {
          // setIsTodayDate(true);
          setDateForFetch(getTodayDate(), true);
        }}
        isTodayDate={isTodayDate}
      >
        Сьогодні
      </TodayBtn>
      <DatePicker setDateForFetch={setDateForFetch} isTodayDate={isTodayDate} />
    </ComponentContainer>
  );
};

export default UserInfoDetaileSelect;

const ComponentContainer = styled.div`
  display: flex;
  /* justify-content: space-around; */
`;

const Text = styled.p`
  /* width: 50px; */
  margin-right: 15px;
`;

const TodayBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 39px;

  padding: 10px;

  font-weight: 500;
  border-radius: 4px;

  border: none;
  color: white;
  background-color: ${({ isTodayDate }) => (!isTodayDate ? 'gray' : '#2da0e8')};

  margin-right: 5px;

  cursor: pointer;
`;
