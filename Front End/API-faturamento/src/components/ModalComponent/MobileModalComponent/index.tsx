import { useContext } from "react";
import { ModalContext } from "../../../context/modalContext";
import "../../../utils/styles.css";
import { ModalProps } from "../style";
import { StyledMobileModal } from "./styles";

export const MobileModalComponent: React.FC<ModalProps> = ({ ...props }) => {
  const {
    closeModal,
    isModalOpen,
    modalContent,
    modalSize,
    mobileModalContent,
  } = useContext(ModalContext);

  return (
    <StyledMobileModal
      {...props}
      animation={false}
      show={isModalOpen}
      onHide={closeModal}
      border_radius={"20px"}
      border={"none"}
      size={modalSize}>
      {mobileModalContent}
    </StyledMobileModal>
  );
};
