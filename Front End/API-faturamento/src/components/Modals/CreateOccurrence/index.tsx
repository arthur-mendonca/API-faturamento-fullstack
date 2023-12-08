import { useContext } from "react";
import { ModalContext } from "../../../context/modalContext";
import {
  ModalProps,
  StyledCloseButton,
  StyledModal,
  StyledModalBody,
  StyledModalFooter,
  StyledSpan,
} from "./style";
import { ButtonComponent } from "../../Buttons";

export const CreateOccurrenceModal: React.FC<ModalProps> = ({ ...props }) => {
  const { closeModal, isModalOpen } = useContext(ModalContext);

  return (
    <StyledModal
      {...props}
      animation={false}
      show={isModalOpen}
      onHide={closeModal}
      border_radius={"20px"}
      border={"none"}>
      <StyledModal.Header className="d-flex ">
        <p className="modal_text">Ações</p>
        <StyledCloseButton onClick={() => closeModal()} font_size={"1rem"} />
      </StyledModal.Header>
      <StyledModalBody
        display="flex"
        flex_direction="column"
        padding="0"
        margin="0">
        <StyledSpan className="border-bottom d-flex justify-content-center">
          <ButtonComponent background="none" className="modal_text">
            Editar ocorrência
          </ButtonComponent>
        </StyledSpan>
        <StyledSpan className="border-bottom d-flex justify-content-center">
          <ButtonComponent
            background="none"
            className="modal_text modal_text_delete">
            Excluir ocorrência
          </ButtonComponent>
        </StyledSpan>
        <StyledModalFooter margin_top="30px" border="none"></StyledModalFooter>
      </StyledModalBody>
    </StyledModal>
  );
};
