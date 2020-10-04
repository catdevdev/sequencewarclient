import styled from 'styled-components';

const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
`;

const Backdrop = () => {
  return <BackdropContainer></BackdropContainer>;
};

export default Backdrop;
