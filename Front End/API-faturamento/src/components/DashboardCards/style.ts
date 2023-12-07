import styled from "styled-components";
import Card from "react-bootstrap/Card";

export interface CardsProps {
  background_color?: string;
  height?: string;
  z_index?: string;
  position?: string;
  margin_left?: string;
  padding_left?: string;
  width?: string;
  max_width?: string;
  display?: string;
  flex_direction?: string;
  justify_content?: string;
  align_items?: string;
  margin_right?: string;
  margin_top?: string;
  max_height?: string;
  gap?: string;
  color?: string;
}

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

export const StyledCard = styled(Card)<CardsProps>``;

export const StyledCardsHeader = styled(StyledCard)<CardsProps>`
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
`;

export const CustomCardBody = styled(StyledCard.Body)<CardsProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flex_direction};
  align-items: ${(props) => props.align_items};
  justify-content: ${(props) => props.justify_content};
`;

export const CustomCardText = styled(StyledCard.Text)<CardsProps>`
  margin-right: ${(props) => props.margin_right};
`;

export const CustomCardImg = styled(StyledCard.Img)<CardsProps>``;

export const SpanWrapper = styled.span<CardsProps>`
  margin-right: ${(props) => props.margin_right};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flex_direction};
  align-items: ${(props) => props.align_items};
  justify-content: ${(props) => props.justify_content};
  gap: ${(props) => props.gap};
  margin-left: ${(props) => props.margin_left};
`;
