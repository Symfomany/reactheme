import styled from "styled-components";
import { lighten, darken } from "polished";

const Card = styled.div`
  padding: 10px;
  font-size: ${props => props.theme.main.fontSize} + 5;
`;

const CardTitle = styled.div`
  padding: 15px;
`;

const CardContent = styled.div`
  font-size: ${props => props.theme.main.fontSize};
`;
export { Card, CardTitle, CardContent };
