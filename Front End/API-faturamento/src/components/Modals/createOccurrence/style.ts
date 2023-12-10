import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
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
`;

export const StyledCloseButton = styled(CloseButton)<StyleProps>`
  font-size: ${(props) => props.font_size};
`;

export const StyledButton = styled(Button)<StyleProps>``;

export const StyledModalFooter = styled(Modal.Footer)<StyleProps>``;

export const StyledForm = styled(Form)<StyleProps>``;
export const StyledFormGroup = styled(Form.Group)<StyleProps>``;

export const StyledCard = styled(Card)<StyleProps>``;
