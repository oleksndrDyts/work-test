import styled from 'styled-components';

const DetailedList = ({ items }) => {
  return (
    <>
      <List>
        {items.map(el => (
          <ListItem key={el.goods}>
            {el.goods} : {el.bonus}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DetailedList;

const List = styled.ul``;

const ListItem = styled.li``;
