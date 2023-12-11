import { useContext, useState } from "react";
import theme from "../../../global/styles/theme";
import { ButtonComponent } from "../../Buttons";
import { StyledCloseButton, StyledModalBody, StyledSpan } from "./style";
import { ModalContext } from "../../../context/modalContext";
import { DetalhesPartComponent } from "./detalhesIndex";
import { AcoesPartComponent } from "./acoesIndex";
import { ModalButtonComponent } from "../../Buttons/buttonCreateModal";
import {
  IOccurrenceCreate,
  IOccurrenceResponse,
} from "../../../context/occurrencesContext/types";
import { ICreteAnalysis } from "../../../context/analysisContext/style";
import { ICreateCorrectiveAction } from "../../../context/correctiveActionsContext/types";
import { EvidenceType } from "../../../context/evidencesContext/types";
import { OccurrenceContext } from "../../../context/occurrencesContext";
import { AnalysisContext } from "../../../context/analysisContext";
import { CorrectiveActionContext } from "../../../context/correctiveActionsContext";
import { EvidenceContext } from "../../../context/evidencesContext";

export const CreateOccurrenceModal: React.FC = () => {
  const { closeModal } = useContext(ModalContext);
  const { createOccurrence } = useContext(OccurrenceContext);
  const { createAnalysis } = useContext(AnalysisContext);
  const { createCorrectiveAction } = useContext(CorrectiveActionContext);
  const { createEvidence } = useContext(EvidenceContext);

  const [showDetail, setShowDetail] = useState(true);
  const [showActions, setShowActions] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const [occurrenceData, setOccurrenceData] =
    useState<IOccurrenceCreate | null>(null);
  const [analysisData, setAnalysisData] = useState<ICreteAnalysis | null>(null);
  const [correctiveActionsData, setCorrectiveActionsData] = useState<
    ICreateCorrectiveAction[]
  >([]);
  const [evidence, setEvidence] = useState<EvidenceType | null>(null);

  const userId = localStorage.getItem("@USERID");

  const handleOccurrenceData = (data: IOccurrenceCreate) => {
    console.log(data, "handleOccurrenceData");
    setOccurrenceData(data);
  };

  const handleEvidence = (data: EvidenceType) => {
    console.log(data, "handleEvidence");
    setEvidence(data);
  };

  const handleAnalysisData = (data: ICreteAnalysis) => {
    console.log(data, "handleAnalysisData");
    setAnalysisData(data);
  };

  const handleCorrectiveActionsData = (data: ICreateCorrectiveAction[]) => {
    console.log(data, "handleCorrectiveActionsData");
    setCorrectiveActionsData(data);
  };

  const showDetalhes = () => {
    setShowDetail(true);
    setShowActions(false);
  };

  const showAnalisesEAcoes = () => {
    setShowDetail(false);
    setShowActions(true);
  };

  const handleCreate = async () => {
    try {
      const occurrenceResponse: IOccurrenceResponse | undefined =
        await createOccurrence(+userId!, occurrenceData!)!;
      if (occurrenceResponse) {
        const occurrenceId = occurrenceResponse.occurrence.id;
        await createAnalysis(
          occurrenceId!,
          analysisData!.file,
          analysisData!.description
        );

        await createEvidence(occurrenceId!, evidence!);
        const correctiveActionNames = correctiveActionsData.map(
          (action) => action.name
        );
        await Promise.all(
          correctiveActionNames.map((name) =>
            createCorrectiveAction(occurrenceId!, name)
          )
        );
        console.log("Dados criados com sucesso!");
      }
    } catch (error) {
      console.log("Erro ao criar dados:", error);
    }
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
            handleOccurrenceData={handleOccurrenceData}
            handleEvidence={handleEvidence}
          />
        )}
        {showActions && (
          <AcoesPartComponent
            uploadedFile={uploadedFile}
            setUploadedFile={setUploadedFile}
            previewUrl={previewUrl}
            setPreviewUrl={setPreviewUrl}
            handleAnalysisData={handleAnalysisData}
            handleCorrectiveActionsData={handleCorrectiveActionsData}
          />
        )}
      </StyledModalBody>
    </>
  );
};
