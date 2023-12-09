import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

export interface LayoutProps {
  margin_left?: string;
  background_color?: string;
  gap?: string;
}

export const StyledContainer = styled(Container)<LayoutProps>`
  margin-left: ${(props) => props.margin_left};
  background-color: ${(props) => props.background_color};
  width: ${(props) => (props.width ? props.width : "100%")};

  @media (max-width: 992px) {
    /* margin-left: 80px;  */
  }
`;

export const StyledRow = styled(Row)``;

export const StyledCol = styled(Col)``;

export const StyledSpan = styled.span<LayoutProps>`
  gap: ${(props) => props.gap};

  img {
    cursor: pointer;
  }
`;
