import styled from "styled-components";

import { Row, Col } from "react-bootstrap";
import { CardsProps } from "./types";

export const DashboardCardsContainer = styled.div<CardsProps>`
  height: ${(props) => props.height};
  background-color: ${(props) => props.background_color};
  position: ${(props) => props.position};
  margin-left: ${(props) => props.margin_left};
  padding-left: ${(props) => props.padding_left};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flex_direction};
  align-items: ${(props) => props.align_items};
  justify-content: ${(props) => props.justify_content};
  max-height: ${(props) => props.max_height};
  margin-top: ${(props) => props.margin_top};
`;

export const StyledRow = styled(Row)<CardsProps>`
  height: ${(props) => props.height};
  background-color: ${(props) => props.background_color};
  position: ${(props) => props.position};
  margin-left: ${(props) => props.margin_left};
  padding-left: ${(props) => props.padding_left};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flex_direction};
  align-items: ${(props) => props.align_items};
  justify-content: ${(props) => props.justify_content};
  max-height: ${(props) => props.max_height};
  margin-top: ${(props) => props.margin_top};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
`;

export const StyledCol = styled(Col)<CardsProps>`
  height: ${(props) => props.height};
  background-color: ${(props) => props.background_color};
  position: ${(props) => props.position};
  margin-left: ${(props) => props.margin_left};
  padding-left: ${(props) => props.padding_left};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flex_direction};
  align-items: ${(props) => props.align_items};
  justify-content: ${(props) => props.justify_content};
  max-height: ${(props) => props.max_height};
  margin-top: ${(props) => props.margin_top};
  color: ${(props) => props.color};
  margin-right: ${(props) => props.margin_right};
  width: ${(props) => props.width};

  img {
    margin-left: 10px;
    cursor: pointer;
  }

  .cursor_pointer {
    cursor: pointer;
  }
`;

export const StatusWrapper = styled.span<CardsProps>`
  color: ${(props) =>
    props.status === "Finalizado"
      ? props.theme.status.color.finalizado
      : props.theme.status.color.investigacao};

  background-color: ${(props) =>
    props.status === "Finalizado"
      ? props.theme.status.background.finalizado
      : props.theme.status.background.investigacao};

  display: ${(props) => props.display};
  justify-content: ${(props) => props.justify_content};
  align-items: ${(props) => props.align_items};
  width: ${(props) => props.width};
  min-height: ${(props) => props.min_height};
  border-radius: ${(props) => props.border_radius};
  padding: ${(props) => props.padding};

  font-size: ${(props) => {
    return props.status === "Em investigação" ? "12px" : "13px";
  }};

  @media (max-width: 1181px) {
    padding: ${(props) => {
      return props.status === "Em investigação" ? "8px" : "0";
    }};
  }
`;
