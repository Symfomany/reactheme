import styled from "styled-components";
import { lighten, darken } from "polished";

const Card = styled.div`
  margin-right: 10px;
`;

const CardTitle = styled.div`
  font-size: 1.5rem;
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  background: ${props => props.theme.main.thirdColor};
  color: ${props => props.theme.main.primaryColor};
  padding: 15px;
`;

const CardContent = styled.div`
  padding: 15px;
  font-size: 1.2rem;
  border: 1px solid ${props => props.theme.main.thirdColor};
`;
export { Card, CardTitle, CardContent };
