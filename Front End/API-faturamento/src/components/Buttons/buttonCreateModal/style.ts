import styled from "styled-components";
import { StyleProps } from "../../../utils/types";

export const StyledModalButton = styled.button<StyleProps>`
  padding: ${(props) => props.padding || "10px 20px"};

  border-radius: ${(props) =>
    props.theme.buttons.borderRadius.default || props.border_radius};

  border: ${(props) => props.border || "none"};

  background: ${(props) => {
    if (props.statusActive) {
      return props.theme.colors.blue;
    } else if (props.statusActive === false) {
      return props.theme.colors.white;
    } else {
      return props.background || "none";
    }
  }};

  color: ${(props) =>
    props.statusActive ? props.theme.colors.white : props.theme.colors.blue};

  height: ${(props) => props.height || "48px"};
  box-shadow: ${(props) => props.boxshadow || "none"};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flex_direction};
  align-items: ${(props) => props.align_items};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
  align-self: ${(props) => props.align_self};
  margin-left: ${(props) => props.margin_left};

  cursor: ${(props) => props.cursor || "pointer"};

  &:hover {
    background: ${(props) => props.hoverBackground};
  }
`;
