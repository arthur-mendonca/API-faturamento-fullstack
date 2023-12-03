import styled from "styled-components";

interface ContainerProps {
  display?: string;
  flexdirection?: string;
  justifycontent?: string;
  alignitems?: string;
  width?: string;
  height?: string;
}

interface StyledTextProps {
  color?: string;
  fontsize?: string;
  fontweight?: string;
}

interface StyledGroupProps {
  display?: string;
  flexdirection?: string;
  width?: string;
  alignitems?: string;
  marginbottom?: string;
  gap?: string;
}

export const StyledRightColumnContainer = styled.div<ContainerProps>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexdirection || "column"};
  justify-content: ${(props) => props.justifycontent || "center"};
  align-items: ${(props) => props.alignitems || "center"};
`;

export const StyledText = styled.p<StyledTextProps>`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontsize || props.theme.fontSizes.large};
  font-weight: ${(props) => props.fontweight || "500"};
`;

export const StyledGroup = styled.div<StyledGroupProps>`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexdirection || "column"};
  width: ${(props) => props.width || "auto"};
  align-items: ${(props) => props.alignitems || "center"};
  margin-bottom: ${(props) => props.marginbottom || "0"};
  gap: ${(props) => props.gap || "0"};
`;
