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
}

export const StyledModal = styled(Modal)<ModalProps>`
  .modal-dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 200px;
    left: 60px;
  }

  .modal-content {
    border-radius: ${(props) => props.border_radius || "20px"};
    border: ${(props) => props.border};
  }
`;

export const StyledModalBody = styled(Modal.Body)<ModalProps>`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flex_direction};
`;

export const StyledSpan = styled.span<ModalProps>`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export const StyledCloseButton = styled(CloseButton)<ModalProps>`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.font_size};

  svg {
    fill: ${(props) => props.theme.colors.black};
  }
`;

export const StyledButton = styled(Button)<ModalProps>``;

export const StyledModalFooter = styled(Modal.Footer)<ModalProps>`
  border: ${(props) => props.border};
  margin-top: ${(props) => props.margin_top};
`;
