import styled from "styled-components";
import { lighten, darken } from "polished";

const Card = styled.div`
  padding: 10px;
`;

const CardTitle = styled.div`
  font-size: 1.5rem;
`;

const CardContent = styled.div`
  padding: 15px;
  font-size: 1.1rem;
`;
export { Card, CardTitle, CardContent };
