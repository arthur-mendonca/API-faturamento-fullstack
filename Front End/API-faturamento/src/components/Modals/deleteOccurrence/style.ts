import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";

export interface ModalProps {
  border_radius?: string;
  border?: string;
  color?: string;
  font_size?: string;
  font_weight?: string;
  margin?: string;
  fill?: string;
  display?: string;
  flex_direction?: string;
  padding?: string;
  margin_bottom?: string;
  margin_top?: string;
  justify_content?: string;
  background_color?: string;
  margin_right?: string;
  margin_left?: string;
}

export const StyledModal = styled(Modal)<ModalProps>`
  .modal-content {
    border-radius: ${(props) => props.border_radius || "20px"};
    border: ${(props) => props.border};
  }

  .modal {
  }
`;

export const StyledModalBody = styled(Modal.Body)<ModalProps>`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export const StyledModalHeader = styled(Modal.Header)<ModalProps>`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justify_content};
`;

export const StyledSpan = styled.span<ModalProps>`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flex_direction};
  justify-content: ${(props) => props.justify_content};
  margin-top: ${(props) => props.margin_top};
  margin-right: ${(props) => props.margin_right};
`;

export const StyledCloseButton = styled(CloseButton)<ModalProps>`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.font_size};
  margin-left: ${(props) => props.margin_left};
`;

export const StyledDeleteButton = styled.button`
  background-color: var(--red-light);
  border-radius: 50px;
  padding: 8px 15px;
  border: none;
`;

export const StyledModalFooter = styled(Modal.Footer)<ModalProps>`
  border: ${(props) => props.border};
  margin-top: ${(props) => props.margin_top};
`;
