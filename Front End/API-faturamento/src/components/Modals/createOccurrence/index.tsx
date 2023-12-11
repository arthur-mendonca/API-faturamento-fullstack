import { useContext, useState } from "react";
import theme from "../../../global/styles/theme";
import { ButtonComponent } from "../../Buttons";
import { StyledCloseButton, StyledModalBody, StyledSpan } from "./style";
import { ModalContext } from "../../../context/modalContext";
import { DetalhesPartComponent } from "./detalhesIndex";
import { AcoesPartComponent } from "./acoesIndex";
import { ModalButtonComponent } from "../../Buttons/buttonCreateModal";

export const CreateOccurrenceModal: React.FC = () => {
  const { closeModal } = useContext(ModalContext);
  const [showDetail, setShowDetail] = useState(true);
  const [showActions, setShowActions] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const showDetalhes = () => {
    setShowDetail(true);
    setShowActions(false);
  };

  const showAnalisesEAcoes = () => {
    setShowDetail(false);
    setShowActions(true);
  };

  const handleCreate = () => {
    console.log("criar");
  };

  return (
    <>
      <StyledModalBody className="d-flex border">
        <StyledSpan
          className="position-relative"
          display="flex"
          justify_content="space-between"
          align_items="center"
          gap="1.5rem"
          position="relative"
          right="-1%">
          <StyledCloseButton onClick={() => closeModal()} font_size={"1rem"} />
          <p className="modal_text">Nova ocorrência</p>
        </StyledSpan>
        <ButtonComponent
          style={{ position: "relative", left: "54%" }}
          onClick={() => handleCreate()}
          background={theme.colors.blue}
          className="text_menu_button"
          padding="0 3rem">
          Criar
        </ButtonComponent>
      </StyledModalBody>
      <StyledModalBody>
        <StyledSpan display="flex" flexdirection="row" justify_content="center">
          <StyledSpan
            className="text_menu_button"
            display="flex"
            flexdirection="row"
            border={`${theme.colors.grayLight} solid 1px`}
            width="315px"
            border_radius="60px"
            padding="0.4rem 1rem"
            gap="0.5rem">
            <ModalButtonComponent
              onClick={showDetalhes}
              statusActive={showDetail}>
              Detalhes
            </ModalButtonComponent>
            <ModalButtonComponent
              onClick={showAnalisesEAcoes}
              statusActive={showActions}>
              Análises e ações
            </ModalButtonComponent>
          </StyledSpan>
        </StyledSpan>
      </StyledModalBody>
      <StyledModalBody>
        {showDetail && (
          <DetalhesPartComponent
            uploadedFile={uploadedFile}
            setUploadedFile={setUploadedFile}
            previewUrl={previewUrl}
            setPreviewUrl={setPreviewUrl}
          />
        )}
        {showActions && (
          <AcoesPartComponent
            uploadedFile={uploadedFile}
            setUploadedFile={setUploadedFile}
            previewUrl={previewUrl}
            setPreviewUrl={setPreviewUrl}
          />
        )}
      </StyledModalBody>
    </>
  );
};
