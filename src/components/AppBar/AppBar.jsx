import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AppBar = ({ setBurgerClosed }) => {
  return (
    <Nav>
      <ul>
        <ListItem onClick={setBurgerClosed}>
          <Link to="/">Головна</Link>
        </ListItem>
        <ListItem onClick={setBurgerClosed}>
          <Link to="/add">Додати товар</Link>
        </ListItem>
      </ul>
    </Nav>
  );
};

export default AppBar;

const Nav = styled.nav`
  width: 150px;

  @media screen and (min-width: 828px) {
    width: 200px;
    height: 100%;
  }
`;

const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 39px;

  padding: 10px;

  font-weight: 500;
  text-decoration: none;
  color: black;
  border-radius: 4px;

  transition: color ease 250ms;
  transition: background-color ease 250ms;
  &.active {
    color: white;
    background-color: #2da0e8;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: white;
    background-color: #92d5fe;
  }
`;
