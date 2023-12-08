import styled from "styled-components";

export interface ButtonProps {
  background?: string;
  color?: string;
  hoverBackground?: string;
  padding?: string;
  height?: string;
  boxshadow?: string;
  fontsize?: string;
  display?: string;
  flex_direction?: string;
  align_items?: string;
  border?: string;
  gap?: string;
  width?: string;
  border_radius?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  padding: ${(props) => props.padding || "10px 20px"};
  border-radius: ${(props) =>
    props.theme.buttons.borderRadius.default || props.border_radius};
  border: ${(props) => props.border || "none"};
  cursor: pointer;
  background: ${(props) => props.background || "var(--teal)"};
  height: ${(props) => props.height || "48px"};
  box-shadow: ${(props) => props.boxshadow || "none"};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flex_direction};
  align-items: ${(props) => props.align_items};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};

  &:hover {
    background: ${(props) => props.hoverBackground};
  }
`;
