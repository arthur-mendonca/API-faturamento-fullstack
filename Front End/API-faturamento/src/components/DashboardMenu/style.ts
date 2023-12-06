import styled from "styled-components";

interface MenuProps {
  background_color?: string;
  height?: string;
}

export const StyledMenuContainer = styled.aside<MenuProps>`
  height: ${(props) => props.height};
  background-color: ${(props) => props.background_color};
`;
