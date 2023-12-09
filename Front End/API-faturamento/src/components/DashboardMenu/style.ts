import styled from "styled-components";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

export interface MenuProps {
  background_color?: string;
  height?: string;
  border_radius?: string;
  z_index?: string;
  position?: string;
  border?: string;
  border_color?: string;
  padding?: string;
  display?: string;
  flex_direction?: string;
  align_items?: string;
  justify_content?: string;
  gap?: string;
  margin_bottom?: string;
  align_self?: string;
  margin_top?: string;
  width?: string;
  max_width?: string;
  margin_left?: string;
  top?: string;
  margin_right?: string;
}

export const StyledMenuContainer = styled(Col)<MenuProps>`
  height: ${(props) => props.height};
  background-color: ${(props) => props.background_color};
  border-radius: ${(props) => props.border_radius};
  z-index: ${(props) => props.z_index};
  position: ${(props) => props.position};
  border: ${(props) => props.border};
  border-color: ${(props) => props.border_color};
  padding: ${(props) => props.padding};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flex_direction};
  align-items: ${(props) => props.align_items};
  justify-content: ${(props) => props.justify_content};
  position: ${(props) => props.position};
`;

export const StyledIconsWrapper = styled.div<MenuProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flex_direction};
  align-self: ${(props) => props.align_self};
  gap: ${(props) => props.gap};

  p {
    width: 100%;
  }
`;

export const StyledImage = styled(Image)<MenuProps>`
  margin-bottom: ${(props) => props.margin_bottom};
  margin-top: ${(props) => props.margin_top};
  margin-left: ${(props) => props.margin_left};
  margin-right: ${(props) => props.margin_right};
`;

export const InnerIconsWrapper = styled.div<MenuProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flex_direction};
  align-items: ${(props) => props.align_items};
  justify-content: ${(props) => props.justify_content};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
  max-width: ${(props) => props.max_width};
  border-radius: ${(props) => props.border_radius};
  background-color: ${(props) => props.background_color};
  padding: ${(props) => props.padding};
  top: ${(props) => props.top};
  position: ${(props) => props.position};

  img,
  p {
    cursor: pointer;
  }
`;
