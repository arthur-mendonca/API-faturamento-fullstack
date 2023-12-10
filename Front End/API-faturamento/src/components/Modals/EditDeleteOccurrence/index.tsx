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
import "./../../../utils/styles.css";
import { DeleteModal } from "../deleteOccurrence";

export const EditDeleteOccurrenceModal: React.FC<ModalProps> = ({
  ...props
}) => {
  const { closeModal, openModal } = useContext(ModalContext);

  const handleOpen = () => {
    openModal("modal", <DeleteModal />);
  };

  return (
    <>
      <StyledModal.Header className="d-flex" {...props}>
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
            className="modal_text modal_question_delete"
            onClick={() => handleOpen()}>
            Excluir ocorrência
          </ButtonComponent>
        </StyledSpan>
        <StyledModalFooter margin_top="30px" border="none"></StyledModalFooter>
      </StyledModalBody>
    </>
  );
};
