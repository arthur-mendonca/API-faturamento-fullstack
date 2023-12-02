import styled from "styled-components";

interface ButtonProps {
  background?: string;
  color?: string;
  hoverBackground?: string;
  padding?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  padding: ${(props) => props.padding || "10px 20px"};
  border-radius: ${(props) => props.theme.buttons.borderRadius.default};
  border: none;
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.poppins};
  background: ${(props) => props.background || "var(--teal)"};
  color: ${(props) => props.color || "var(--white)"};

  &:hover {
    background: ${(props) => props.hoverBackground || "var(--teal-light)"};
  }
`;
