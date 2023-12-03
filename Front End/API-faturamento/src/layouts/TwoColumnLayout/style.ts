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

  @media (max-width: 992px) {
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
  background-color: ${(props) =>
    props.backgroundcolor || props.theme.colors.white};
`;