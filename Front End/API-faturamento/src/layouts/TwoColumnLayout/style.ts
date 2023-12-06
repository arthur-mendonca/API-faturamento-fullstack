import styled from "styled-components";
import { Col } from "react-bootstrap";

interface RightColumnProps {
  display?: string;
  flexdirection?: string;
  justifycontent?: string;
  alignitems?: string;
  width?: string;
  height?: string;
  backgroundcolor?: string;
  padding?: string;
  paddingright?: string;
  paddingleft?: string;
}

interface LeftColumnProps extends RightColumnProps {}

export const RightColumn = styled(Col)<RightColumnProps>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexdirection || "column"};
  justify-content: ${(props) => props.justifycontent || "center"};
  align-items: ${(props) => props.alignitems || "center"};
  background-color: ${(props) =>
    props.backgroundcolor || props.theme.colors.white};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 100vh;
  }
`;

export const LeftColumn = styled(Col)<LeftColumnProps>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexdirection || "column"};
  justify-content: ${(props) => props.justifycontent || "center"};
  align-items: ${(props) => props.alignitems || "center"};
  padding: ${(props) => props.padding || 0};
  padding-right: ${(props) => props.paddingright || 0};
  padding-left: ${(props) => props.paddingleft || 0};
  background-color: ${(props) =>
    props.backgroundcolor || props.theme.colors.white};
`;
