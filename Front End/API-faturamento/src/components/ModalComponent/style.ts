import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

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
  children?: React.ReactNode;
  height?: string;
  max_height?: string;
}

export const StyledModal = styled(Modal)<ModalProps>`
  height: ${(props) => props.height};
  max-height: ${(props) => props.max_height};

  .modal-body {
    max-height: 80vh;
    overflow-y: auto;
  }

  .modal-dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 40px;
    left: 60px;

    ${({ modalStyles }) =>
      modalStyles &&
      `
        position: ${modalStyles.position}
        top: ${modalStyles.top};
        left: ${modalStyles.left};
       
      `}

    @media (max-width: 992px) {
      position: relative;
      top: 30% !important;
      left: 10% !important;
    }

    @media (max-width: 768px) {
      position: relative;

      left: 28% !important;
    }

    @media (max-width: 576px) {
      position: relative;
      top: 77% !important;
      left: -2.75% !important;

      max-width: 550px;
      width: 100%;
    }
  }

  .modal-content {
    border-radius: ${(props) => props.border_radius || "20px"};
    border: ${(props) => props.border};
  }
`;
