import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { StyleProps } from "../../utils/types";

// export interface LayoutProps {
//   margin_left?: string;
//   background_color?: string;
//   gap?: string;
//   max_height?: string;
// }

export const StyledContainer = styled(Container)<StyleProps>`
  margin-left: ${(props) => props.margin_left};
  background-color: ${(props) => props.background_color};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => props.height};
  max-width: ${(props) => props.max_width};

  @media (max-width: 1180px) {
    margin-left: 0;
    width: 95%;
  }
`;

export const StyledRow = styled(Row)<StyleProps>`
  height: ${(props) => props.height};
  background-color: ${(props) => props.background_color};
`;

export const StyledCol = styled(Col)<StyleProps>`
  max-height: ${(props) => props.max_height};
`;

export const StyledSpan = styled.span<StyleProps>`
  gap: ${(props) => props.gap};

  img {
    cursor: pointer;
  }
`;
