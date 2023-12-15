import styled from "styled-components";

interface LogoProps {
  width?: string;
  height?: string;
}

export const StyledLogo = styled.img<LogoProps>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
`;
