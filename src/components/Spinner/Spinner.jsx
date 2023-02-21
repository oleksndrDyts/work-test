import styled from 'styled-components';
import { Watch } from 'react-loader-spinner';

const Spinner = ({ dep }) => {
  return (
    <ComponentContainer>
      <Watch
        visible={dep}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperStyle={{ top: '30%', left: '50%', position: 'relative' }}
        wrapperClass="comment-wrapper"
        color="#2da0e8"
        backgroundColor="#F4442E"
      />
    </ComponentContainer>
  );
};

export default Spinner;

const ComponentContainer = styled.div`
  position: fixed;
  background-color: rgba(146, 213, 254, 0.7);
  height: 100vh;
  width: 100vw;

  top: 0;
  left: 0;
`;
