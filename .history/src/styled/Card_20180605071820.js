import styled from "styled-components";
import { lighten, darken } from "polished";

const Card = styled.div`
  padding: 10px;
  width: 450px;
  border-radius: 10px;
  border-color: ${props => props.theme.main.thirdColor};
`;

const CardTitle = styled.div`
  font-size: 1.5rem;
  background: ${props => props.theme.main.thirdColor};
  color: ${props => props.theme.main.primaryColor};
  padding: 15px;
`;

const CardContent = styled.div`
  padding: 15px;
  font-size: 1.1rem;
`;
export { Card, CardTitle, CardContent };
