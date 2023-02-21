import styled from 'styled-components';

const AddCheck = ({ items, deleteItem, onAddBonus }) => {
  return (
    <ComponentContainer>
      <List>
        {items.map(({ goods, bonus, date, id }) => {
          return (
            <ListItem key={id}>
              <p>
                Виробник: {goods} | бонусів: {bonus}
              </p>
              <Btn
                onClick={() => {
                  deleteItem(id);
                }}
              >
                Видалити
              </Btn>
            </ListItem>
          );
        })}
      </List>
      {items.length !== 0 && <BtnAdd onClick={onAddBonus}>Відправити</BtnAdd>}
      {items.length === 0 && <p>Добавте товар</p>}
    </ComponentContainer>
  );
};

export default AddCheck;

const ComponentContainer = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* background-color: red; */
  width: 400px;
  height: 400px;
  overflow-y: hidden;
`;

const List = styled.ol`
  /* list-style: start; */
  /* padding: 20px; */
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Btn = styled.button``;
const BtnAdd = styled.button`
  margin-top: 20px;
`;
