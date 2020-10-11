import styled from 'styled-components';

const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
`;

const Backdrop = ({ children }) => {
  return <BackdropContainer mobile>{children}</BackdropContainer>;
};

export default Backdrop;
