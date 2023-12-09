import { useContext } from "react";
import "../../utils/styles.css";
import { ModalContext } from "../../context/modalContext";
import { ModalProps, StyledModal } from "./style";

export const ModalComponent: React.FC<ModalProps> = ({ ...props }) => {
  const { closeModal, isModalOpen, modalContent, modalSize } =
    useContext(ModalContext);

  return (
    <StyledModal
      {...props}
      animation={false}
      show={isModalOpen}
      onHide={closeModal}
      border_radius={"20px"}
      border={"none"}
      size={modalSize}>
      {modalContent}
    </StyledModal>
  );
};
