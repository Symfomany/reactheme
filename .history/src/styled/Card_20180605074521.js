import styled from "styled-components";
import { lighten, darken } from "polished";

const Card = styled.div`
  margin-right: 10px;
  border-radius: 5%;
  border: 1px solid ${props => props.theme.main.thirdColor};
`;

const CardTitle = styled.div`
  font-size: 1.5rem;
  border-radius-top-left: 10px;
  border-radius-top-right: 10px;

  background: ${props => props.theme.main.thirdColor};
  color: ${props => props.theme.main.primaryColor};
  padding: 15px;
`;

const CardContent = styled.div`
  padding: 15px;
  font-size: 1.2rem;
`;
export { Card, CardTitle, CardContent };
