import styled from "styled-components";
import { lighten, darken } from "polished";

const Card = styled.card`
  padding: 10px;
`;

const CardTitle = styled.card`
  padding: 15px;
`;

const CardContent = styled.card`
  font-size: ${props => props.main.fontSize};
`;
export { Card };
