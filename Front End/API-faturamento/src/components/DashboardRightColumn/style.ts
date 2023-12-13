import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { ColumnProps } from "./types";
import { IoSearch } from "react-icons/io5";

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
  max-width: ${(props) => props.max_width};

  @media (min-width: 1200px) {
    justify-content: normal;
  }

  @media (max-width: 1180px) {
    max-width: 77vw;
  }

  @media (max-width: 1070px) {
    margin-left: 20px;
  }
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
  margin-bottom: ${(props) => props.margin_bottom};
`;

export const SearchBarWrapper = styled.div<ColumnProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flex_direction};
  justify-content: ${(props) => props.justify_content};
  align-items: ${(props) => props.align_items};
  margin-left: ${(props) => props.margin_left};
`;

export const InnerSearchbarWrapper = styled.span<ColumnProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flex_direction};
  justify-content: ${(props) => props.justify_content};
  align-items: ${(props) => props.align_items};
  width: ${(props) => props.width};
`;

export const StyledImage = styled(Image)<ColumnProps>``;

export const StyledSearchIcon = styled(IoSearch)<ColumnProps>`
  position: ${(props) => props.position};
  left: ${(props) => props.left};
  transform: ${(props) => props.transform};
  top: ${(props) => props.top};
  right: ${(props) => props.right};

  cursor: pointer;
  @media (min-width: 1200px) {
  }
`;
