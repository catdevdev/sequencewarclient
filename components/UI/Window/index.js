import styled from "styled-components";

const StyledWindow = styled.div`
  width: 100%;
  height: 700px;

  border: solid 3px #fff;
  border-radius: 5px;

  background: rgba(0, 0, 0, 0.6);
`;

const Window = () => {
  return <StyledWindow></StyledWindow>;
};

export default Window;
