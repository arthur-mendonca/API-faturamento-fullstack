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
import { EditOccurrenceModal } from "../EditOccurrenceModal";
import { OccurrenceContext } from "../../../context/occurrencesContext";
import { IOccurrence } from "../../../context/occurrencesContext/types";

export const EditDeleteOccurrenceModal: React.FC<ModalProps> = ({
  ...props
}) => {
  const { closeModal, openModal, openMobileModal } = useContext(ModalContext);
  const { occurrence } = useContext(OccurrenceContext);

  const handleOpen = () => {
    openModal("modal", <DeleteModal />);
  };

  const handleShowEditModal = (occurrence: IOccurrence) => {
    closeModal();
    openMobileModal(
      "mobileModal",
      <EditOccurrenceModal occurrence={occurrence} />,
      "lg"
    );
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
          <ButtonComponent
            background="none"
            className="modal_text"
            onClick={() => handleShowEditModal(occurrence!)}>
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
