import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { StyleProps } from "../../utils/types";

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

  @media (max-width: 992px) {
    margin-left: -19%;
    max-width: 755px;
    width: 113%;
  }

  @media (max-width: 426px) {
    margin-left: -22%;
    max-width: 755px;
    width: 120%;
  }
`;

export const StyledRow = styled(Row)<StyleProps>`
  height: ${(props) => props.height};
  background-color: ${(props) => props.background_color};
`;

export const StyledCol = styled(Col)<StyleProps>`
  max-height: ${(props) => props.max_height};

  @media (max-width: 992px) {
  }
`;

export const StyledSpan = styled.span<StyleProps>`
  gap: ${(props) => props.gap};

  img {
    cursor: pointer;
  }
`;

export const TitleWrapper = styled.div<StyleProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flex_direction};
  align-items: ${(props) => props.align_items};
  justify-content: ${(props) => props.justify_content};
  margin-bottom: ${(props) => props.margin_bottom};
  margin-top: ${(props) => props.margin_top};

  @media (max-width: 992px) {
    margin-bottom: ${(props) => props.marginbottom_mobile};
  }
`;

export const StyledTitle = styled.h1<StyleProps>`
  display: ${(props) => props.display};
  align-self: ${(props) => props.align_self};

  @media (max-width: 631px) {
    font-size: 150%;
  }

  @media (max-width: 526px) {
    font-size: 120%;
  }

  @media (max-width: 376px) {
    font-size: 100%;
  }
`;
