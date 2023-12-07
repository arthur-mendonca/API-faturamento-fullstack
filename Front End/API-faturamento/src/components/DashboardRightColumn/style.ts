import styled from "styled-components";
import Col from "react-bootstrap/Col";

interface ColumnProps {
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
}

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
`;

export const InnerDataWrapper = styled.div<ColumnProps>`
  width: ${(props) => props.width};
  max-width: ${(props) => props.max_width};
  background-color: ${(props) => props.background_color};
  height: ${(props) => props.height};
`;
