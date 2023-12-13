import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { ModalProps } from "../style";

export const StyledMobileModal = styled(Modal)<ModalProps>`
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

    @media (max-width: 992px) {
      position: relative;
      top: -1% !important;
      left: 1% !important;
    }

    @media (max-width: 767px) {
      position: relative;
      top: 1% !important;
      left: 15% !important;
    }

    @media (max-width: 636px) {
      position: relative;
      top: 0% !important;
      left: 10% !important;
    }

    @media (max-width: 576px) {
      position: relative;
      top: 2.5% !important;
      left: -2% !important;

      max-width: 600px;

      height: 750px;
      width: 100%;
    }
  }

  .modal-content {
    border-radius: ${(props) => props.border_radius || "20px"};
    border: ${(props) => props.border};
  }
`;
