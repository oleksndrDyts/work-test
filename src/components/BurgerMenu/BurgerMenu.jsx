import styled from 'styled-components';

import AppBar from 'components/AppBar';

const BurgerMenu = ({ isOpen, setBurgerClosed }) => {
  return (
    <>
      {isOpen && (
        <BurgerContainer>
          <AppBar setBurgerClosed={setBurgerClosed} />
        </BurgerContainer>
      )}
    </>
  );
};

export default BurgerMenu;

const BurgerContainer = styled.div`
  position: fixed;

  display: flex;
  /* align-items: center; */
  justify-content: center;
  /* margin-top: 60px; */

  padding-top: 70px;

  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;

  background-color: #92d5fe;

  z-index: 100;
  overflow: auto;
`;

export const BurgerMenuBtn = ({ isOpen, burgerToggle }) => {
  return (
    <>
      <BurgerMenuBtnContainer isOpen={isOpen} onClick={burgerToggle}>
        <MiddleLine isOpen={isOpen} />
      </BurgerMenuBtnContainer>
    </>
  );
};

const BurgerMenuBtnContainer = styled.div`
  /* margin-left: auto; */

  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  z-index: 101;
  ::before,
  ::after {
    content: ' ';
    position: absolute;
    left: 0;
    height: 4px;
    border-radius: 21px;
    transition: all 0.3s ease 0s;
    background-color: white;

    width: 100%;
  }

  ::before {
    top: ${p => (p.isOpen ? '50%' : '0')};
    transform: ${p =>
      p.isOpen ? 'rotate(-45deg) translate(0px, -60%)' : 'none'};
  }

  ::after {
    bottom: ${p => (p.isOpen ? '50%' : '0')};
    transform: ${p =>
      p.isOpen ? 'rotate(45deg) translate(0px, 60%)' : 'none'};
  }
`;

const MiddleLine = styled.span`
  position: absolute;
  left: 0;
  height: 4px;
  border-radius: 21px;
  transition: all 0.3s ease 0s;
  background-color: white;

  width: 100%;

  top: 50%;
  transform: ${p =>
    p.isOpen
      ? 'scale(0) translate(0px, -50%)'
      : 'scale(1) translate(0px, -50%)'};
`;
