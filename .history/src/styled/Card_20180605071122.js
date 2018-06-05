import styled from "styled-components";
import { lighten, darken } from "polished";

const Card = styled.div`
  padding: 10px;
`;

const CardTitle = styled.div`
  padding: 15px;
`;

const CardContent = styled.div`
  font-size: ${props => props.main.fontSize};
`;
export { Card, CardTitle, CardContent };
