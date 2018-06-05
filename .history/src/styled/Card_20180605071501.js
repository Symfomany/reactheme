import styled from "styled-components";
import { lighten, darken } from "polished";

const Card = styled.div`
  padding: 10px;
`;

const CardTitle = styled.div`
  padding: 10px;
  font-size: 1.5rem;
`;

const CardContent = styled.div`
  font-size: ${props => props.theme.main.fontSize};
`;
export { Card, CardTitle, CardContent };
