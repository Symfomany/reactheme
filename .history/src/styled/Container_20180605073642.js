import styled from "styled-components";

const Container = styled.div`
  padding: 50px;
  font-family: ${props => props.theme.main.fontFamily};
  background-color: ${props => props.theme.main.bodyBg};
`;

export { Container };
