import styled from "styled-components";
import { Card } from "react-bootstrap";
import { StyleProps } from "../../utils/types";
import { BsPlusCircleFill } from "react-icons/bs";

export const StyledCard = styled(Card)<StyleProps>`
  border-radius: ${(props) => props.border_radius};
`;

export const StyledCardHeader = styled(Card.Header)<StyleProps>`
  background-color: ${(props) => props.background_color};
`;

export const StyledCardBody = styled(Card.Body)<StyleProps>``;

export const StyledCardTitle = styled(Card.Title)<StyleProps>`
  cursor: pointer;
`;

export const StyledCardText = styled(Card.Text)<StyleProps>`
  color: ${(props) =>
    props.status === "Finalizado"
      ? props.theme.status.color.finalizado
      : props.theme.status.color.investigacao};

  background-color: ${(props) =>
    props.status === "Finalizado"
      ? props.theme.status.background.finalizado
      : props.theme.status.background.investigacao};

  min-height: ${(props) => props.min_height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.border_radius};
`;

export const StyledCardImg = styled(Card.Img)<StyleProps>`
  cursor: pointer;
`;

export const StyledSpan = styled.span<StyleProps>`
  margin-right: ${(props) => props.margin_right};
`;

export const StyledAddButton = styled(BsPlusCircleFill)<StyleProps>`
  size: ${(props) => props.size};
  position: ${(props) => props.position};
  z-index: ${(props) => props.z_index};
  color: ${(props) => props.color};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};

  cursor: pointer;
`;
