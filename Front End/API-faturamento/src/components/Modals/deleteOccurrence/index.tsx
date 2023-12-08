import { useContext } from "react";
import { ModalProps } from "react-bootstrap";
import { ModalContext } from "../../../context/modalContext";
import { OccurrenceContext } from "../../../context/occurrencesContext";
import {
  StyledCloseButton,
  StyledModalBody,
  StyledSpan,
  StyledModalFooter,
  StyledModalHeader,
  StyledDeleteButton,
} from "./style";

export const DeleteModal: React.FC<ModalProps> = ({ ...props }) => {
  const { closeModal, isModalOpen } = useContext(ModalContext);
  const { occurrence, getAllOccurrences, deleteOccurrence } =
    useContext(OccurrenceContext);

  const handleDelete = async () => {
    if (occurrence?.id) {
      await deleteOccurrence(occurrence.id);
      closeModal();
      getAllOccurrences();
      closeModal();
    }
  };

  return (
    <>
      <StyledModalHeader
        {...props}
        display="flex"
        justify_content="space_between">
        <StyledSpan className="d-flex" margin_right="10px">
          <StyledCloseButton
            margin_left="10px"
            onClick={() => closeModal()}
            font_size={"0.9rem"}
            className="align-self-center"
          />
        </StyledSpan>
        <p className="modal_text text-center" style={{ marginRight: "10px" }}>
          Excluir ocorrência
        </p>
        <StyledDeleteButton onClick={() => handleDelete()}>
          <p className="modal_text_delete">Excluir</p>
        </StyledDeleteButton>
      </StyledModalHeader>
      <StyledModalBody>
        <StyledSpan
          display="flex"
          flex_direction="column"
          justify_content="center"
          margin_top="20px">
          <p className="text-center">
            Tem certeza que deseja excluir a ocorrência{" "}
            <span className="modal_occurrence_name">
              {`${occurrence?.name}?` || "selecionada?"}
            </span>
          </p>
        </StyledSpan>

        <StyledModalFooter margin_top="10px" border="none"></StyledModalFooter>
      </StyledModalBody>
    </>
  );
};
