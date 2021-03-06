import styled from "styled-components";
import { lighten, darken } from "polished";

const SimpleButton = styled.button`
  font-size: ${props => props.theme.main.fontSize};
  padding: 10px;
  border-radius: ${props => props.theme.main.button.borderRadius};
  border: none;
  color: ${props => props.theme.main.primaryColor};
  border: 1px solid ${props => props.theme.main.primaryColor};
  background: ${props => props.theme.main.thirdColor};

  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease 0s;
  margin: 10px;
  display: block;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${lighten(0.2, "#7B0D1E")};
  }
`;
const OutlineButton = SimpleButton.extend`
  color: ${props => props.theme.main.thirdColor};
  border: 1px solid ${props => props.theme.main.primaryColor};
  background: transparent;
  box-shadow: none;
  &:hover {
    color: white;
  }
`;
const ShadowButton = styled.button`
  background: transparent;
  color: #000;
  border: 1px solid #eee;
`;
const FloatButton = SimpleButton.extend`
  background: transparent;
  color: ${props => props.theme.main.thirdColor};
  border-radius: 50%;
  &:hover {
    color: white;
  }
`;
const IconButton = styled.button`
  color: #000;
  border: 1px solid #eee;
`;

export { SimpleButton, IconButton, OutlineButton, ShadowButton, FloatButton };
