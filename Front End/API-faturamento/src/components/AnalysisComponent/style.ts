import { Card } from "react-bootstrap";
import styled from "styled-components";
import { StyleProps } from "../../utils/types";

export const StyledCard = styled(Card)<StyleProps>`
  max-height: ${(props) => props.max_height};
  overflow-y: ${(props) => props.overflowY};
  height: ${(props) => props.height};
`;

export const StyledCardBody = styled(Card.Body)<StyleProps>`
  max-height: ${(props) => props.max_height};
  overflow-y: ${(props) => props.overflowY};
`;
