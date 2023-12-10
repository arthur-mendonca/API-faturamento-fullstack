import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import { StyleProps } from "../../../utils/types";

export const StyledModal = styled(Modal)<StyleProps>``;

export const StyledModalHeader = styled(Modal.Header)<StyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CustomHeader = styled.header<StyleProps>`
  justify-content: space-between;
  padding: 0 1rem;
  border-bottom: solid 1px rgba(0, 0, 0, 0.175);
  padding-bottom: 1rem;
`;

export const StyledModalBody = styled(Modal.Body)<StyleProps>``;

export const StyledSpan = styled.span<StyleProps>`
  justify-content: ${(props) => props.justify_content};
  display: ${(props) => props.display};
  align-items: ${(props) => props.align_items};
  gap: ${(props) => props.gap};
  position: ${(props) => props.position};
  right: ${(props) => props.right};
`;

export const StyledCloseButton = styled(CloseButton)<StyleProps>`
  font-size: ${(props) => props.font_size};
`;

export const StyledButton = styled(Button)<StyleProps>``;

export const StyledModalFooter = styled(Modal.Footer)<StyleProps>``;
