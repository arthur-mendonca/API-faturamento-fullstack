import styled from "styled-components";

interface ImageProps {
  width?: string;
  height?: string;
  maxwidth?: string;
  marginbottom?: string;
  marginleft?: string;
}
export const StyledImage = styled.img<ImageProps>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  max-width: ${(props) => props.maxwidth};
  margin-bottom: ${(props) => props.marginbottom || "0"};
  margin-left: ${(props) => props.marginleft || "0"};
`;
