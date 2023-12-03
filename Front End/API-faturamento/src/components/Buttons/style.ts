import styled from "styled-components";

interface ButtonProps {
  background?: string;
  color?: string;
  hoverBackground?: string;
  padding?: string;
  height?: string;
  boxshadow?: string;
  fontsize?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  padding: ${(props) => props.padding || "10px 20px"};
  border-radius: ${(props) => props.theme.buttons.borderRadius.default};
  border: none;
  cursor: pointer;
  background: ${(props) => props.background || "var(--teal)"};
  height: ${(props) => props.height || "48px"};
  box-shadow: ${(props) => props.boxshadow || "none"};
  &:hover {
    background: ${(props) => props.hoverBackground};
  }
`;
