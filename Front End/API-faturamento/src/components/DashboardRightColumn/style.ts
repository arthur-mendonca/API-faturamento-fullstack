import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { ColumnProps } from "./types";

export const StyledDashboardRightColumn = styled(Col)<ColumnProps>`
  height: ${(props) => props.height};
  background-color: ${(props) => props.background_color};
  z-index: ${(props) => props.z_index};
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

export const InnerDataWrapper = styled.div<ColumnProps>`
  width: ${(props) => props.width};
  max-width: ${(props) => props.max_width};
  background-color: ${(props) => props.background_color};
  height: ${(props) => props.height};
  margin-right: ${(props) => props.margin_right};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flex_direction};
  align-items: ${(props) => props.align_items};
  gap: ${(props) => props.gap};
`;

export const TitleWrapper = styled.div<ColumnProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flex_direction};
  justify-content: ${(props) => props.justify_content};
  margin-top: ${(props) => props.margin_top};
  align-items: ${(props) => props.align_items};
`;

export const SearchBarWrapper = styled.div<ColumnProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flex_direction};
  justify-content: ${(props) => props.justify_content};
  align-items: ${(props) => props.align_items};
`;

export const InnerSearchbarWrapper = styled.span<ColumnProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flex_direction};
  justify-content: ${(props) => props.justify_content};
  align-items: ${(props) => props.align_items};
  width: ${(props) => props.width};
`;

export const StyledImage = styled(Image)<ColumnProps>``;
