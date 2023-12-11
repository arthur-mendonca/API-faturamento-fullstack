import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import CloseButton from "react-bootstrap/CloseButton";
import Form from "react-bootstrap/Form";
import { StyleProps } from "../../../utils/types";
import Card from "react-bootstrap/Card";

export const StyledModal = styled(Modal)<StyleProps>``;

export const StyledModalBody = styled(Modal.Body)<StyleProps>``;

export const StyledSpan = styled.span<StyleProps>`
  justify-content: ${(props) => props.justify_content};
  display: ${(props) => props.display};
  align-items: ${(props) => props.align_items};
  gap: ${(props) => props.gap};
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  width: ${(props) => props.width};
  background-color: ${(props) => props.background_color};
  border-radius: ${(props) => props.border_radius};
  padding: ${(props) => props.padding};
  flex-direction: ${(props) => props.flex_direction};
  gap: ${(props) => props.gap};
  border: ${(props) => props.border};
  margin-top: ${(props) => props.margintop};
  top: ${(props) => props.top};
`;

export const StyledCloseButton = styled(CloseButton)<StyleProps>`
  font-size: ${(props) => props.font_size};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
`;

export const StyledButton = styled.button<StyleProps>`
  border: ${(props) => props.border};
  background-color: ${(props) => props.background_color};
`;

export const StyledModalFooter = styled(Modal.Footer)<StyleProps>``;

export const StyledForm = styled(Form)<StyleProps>``;
export const StyledFormGroup = styled(Form.Group)<StyleProps>``;

export const StyledCard = styled(Card)<StyleProps>`
  height: ${(props) => props.height};
  border: ${(props) => props.border};
`;
