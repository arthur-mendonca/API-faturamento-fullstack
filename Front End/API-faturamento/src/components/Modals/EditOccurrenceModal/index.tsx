import { useContext, useEffect, useState } from "react";
import theme from "../../../global/styles/theme";
import { ButtonComponent } from "../../Buttons";
import {
  StyledCloseButton,
  StyledForm,
  StyledModalBody,
  StyledSpan,
  StyledButtonSpan,
  StyledModalHeader,
  StyledMobileButton,
} from "./style";
import { ModalContext } from "../../../context/modalContext";
import { ModalButtonComponent } from "../../Buttons/buttonCreateModal";
import {
  IOccurrence,
  IOccurrenceCreate,
} from "../../../context/occurrencesContext/types";
import {
  IAnalysis,
  IAnalysisUpdate,
  ICreteAnalysis,
} from "../../../context/analysisContext/types";
import {
  ICreateCorrectiveAction,
  IUpdateCorrectiveAction,
} from "../../../context/correctiveActionsContext/types";
import {
  EvidenceType,
  IEvidence,
} from "../../../context/evidencesContext/types";
import { OccurrenceContext } from "../../../context/occurrencesContext";
import { AnalysisContext } from "../../../context/analysisContext";
import { CorrectiveActionContext } from "../../../context/correctiveActionsContext";
import { EvidenceContext } from "../../../context/evidencesContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { combinedSchema } from "../../../schema/createOccurrenceSchema";
import { EditOccurrenceModalBody } from "./EditOccurrenceModalBody";

interface EditModalProps {
  occurrence: IOccurrence;
}

export const EditOccurrenceModal: React.FC<EditModalProps> = ({
  occurrence,
}) => {
  const userId = localStorage.getItem("@USERID");
  const { closeModal } = useContext(ModalContext);
  const { updateOccurrence } = useContext(OccurrenceContext);
  const {
    updateAnalysis,
    getAllAnalysesFromOccurrence,
    analyses,
    setAnalyses,
    deleteAnalysis,
    analysesResponse,
    setAnalysesResponse,
  } = useContext(AnalysisContext);
  const {
    updateCorrectiveAction,
    getAllCorrectiveActionsFromOccurrence,
    setCorrectiveActionResponse,
    correctiveActionResponse,
  } = useContext(CorrectiveActionContext);
  const {
    updateEvidence,
    getAllEvidencesFromOccurrence,
    setEvidences,
    evidences,
    deleteEvidence,
  } = useContext(EvidenceContext);

  const [showDetail, setShowDetail] = useState(true);
  const [showActions, setShowActions] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewEvidenceUrl, setPreviewEvidenceUrl] = useState("");
  const [previewAnalysisUrl, setPreviewAnalysisUrl] = useState("");

  const [screenMobile, setScreenMobile] = useState(window.innerWidth > 500);

  const [occurrenceData, setOccurrenceData] =
    useState<Partial<IOccurrence> | null>(null);

  const [analysisDataUpdate, setAnalysisDataUpdate] = useState<IAnalysisUpdate>(
    {
      filename: new File([], ""),
      description: "",
    }
  );

  const [correctiveActionsDataUpdate, setCorrectiveActionsDataUpdate] =
    useState([]);

  const [evidence, setEvidence] = useState<EvidenceType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const evidenceResponse = await getAllEvidencesFromOccurrence(
        occurrence.id
      );
      if (evidenceResponse) {
        setEvidences(evidenceResponse);
      }
      const correctiveActionsResponse =
        await getAllCorrectiveActionsFromOccurrence(occurrence.id);
      if (correctiveActionsResponse) {
        setCorrectiveActionResponse(correctiveActionsResponse);
      }
    };
    fetchData();

    const handleResize = () => {
      setScreenMobile(window.innerWidth > 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getAllAnalysesFromOccurrence]);

  const showDetalhes = () => {
    setShowDetail(true);
    setShowActions(false);
  };

  const showAnalisesEAcoes = () => {
    setShowDetail(false);
    setShowActions(true);
  };

  const handleOccurrenceData = (data: IOccurrenceCreate) => {
    setOccurrenceData(data);
  };

  const handleCorrectiveActionChange = (id: number, name: string) => {
    setCorrectiveActionsDataUpdate((currentActions) =>
      currentActions.map((action) =>
        action.id === id ? { ...action, name } : action
      )
    );
  };

  const handleCreate = async () => {
    try {
      const currentOccurrenceId = occurrence.id;
      if (occurrenceData) {
        await updateOccurrence(currentOccurrenceId, occurrenceData);
      }
      const evidence: Partial<IEvidence | undefined> = evidences?.evidences[0];
      if (evidence) {
        await updateEvidence(evidence.id!, evidence);
      }
      const analysis: Partial<IAnalysis> = analyses[0];
      if (analysis) {
        await updateAnalysis(analysis.id!, analysis);
      }
      const updates = correctiveActionsData.map((action) =>
        updateCorrectiveAction(action.id, action)
      );
      console.log(correctiveActionResponse, "CORRECTIVE ACTIONS RESPONSE");

      await Promise.all(updates);
      // updateCorrectiveAction()

      // await updateAnalysis(
      //   newOccurrenceId!,
      //   analysisData!.file,
      //   analysisData!.description!
      // );
      // const correctiveActionNames = correctiveActionsData.map(
      //   (action) => action.name
      // );
      // await Promise.all(
      //   correctiveActionNames.map((name: string) =>
      //     updateCorrectiveAction(newOccurrenceId!, [{ name }])
      //   )
      // );
      console.log("Dados criados com sucesso!");
    } catch (error) {
      console.log("Erro ao criar dados:", error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(combinedSchema),
  });

  return (
    <>
      <StyledModalBody className="d-flex border-top-0 border-right-0 border-left-0 border-bottom">
        <StyledModalHeader border="none" padding="0">
          <StyledSpan
            className="position-relative"
            display="flex"
            justify_content="flex-start"
            align_items="center"
            gap="1rem"
            position="relative"
            right="">
            <StyledCloseButton
              onClick={() => closeModal()}
              font_size={"1rem"}
            />

            <p className="modal_text">Editar ocorrência</p>
          </StyledSpan>
          <StyledButtonSpan position="relative" left="140%">
            {screenMobile ? (
              <ButtonComponent
                type="submit"
                form="formModal"
                onClick={() => handleCreate()}
                background={theme.colors.blue}
                className="text_menu_button"
                padding="0 3rem">
                Editar
              </ButtonComponent>
            ) : (
              <StyledMobileButton
                onClick={() => handleCreate()}
                background_color={theme.colors.blue}
                border="none"
                className="text_menu_button"
                padding="9px 2rem"
                border_radius="20px">
                Criar
              </StyledMobileButton>
            )}
          </StyledButtonSpan>
        </StyledModalHeader>
      </StyledModalBody>
      <StyledModalBody className="border-right-0 border-left-0">
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
        <StyledForm onSubmit={handleSubmit(handleCreate)} id="formModal">
          <EditOccurrenceModalBody
            uploadedFile={uploadedFile}
            setUploadedFile={setUploadedFile}
            setPreviewAnalysisUrl={setPreviewAnalysisUrl}
            previewAnalysisUrl={previewAnalysisUrl}
            previewEvidenceUrl={previewEvidenceUrl}
            setPreviewEvidenceUrl={setPreviewEvidenceUrl}
            handleOccurrenceData={handleOccurrenceData}
            showActions={showActions}
            showDetail={showDetail}
            register={register}
            setEvidence={setEvidence}
            occurrenceData={occurrenceData}
            analyses={analyses}
            setAnalysisDataUpdate={setAnalysisDataUpdate}
            correctiveActionsResponse={correctiveActionResponse}
            // evidence={evidence}
            evidences={evidences}
            occurrence={occurrence}
            correctiveActionsDataUpdate={correctiveActionsDataUpdate}
            setCorrectiveActionsDataUpdate={setCorrectiveActionsDataUpdate}
            deleteEvidence={deleteEvidence}
            getAllEvidencesFromOccurrence={getAllEvidencesFromOccurrence}
            updateEvidence={updateEvidence}
            setEvidences={setEvidences}
          />
        </StyledForm>
      </StyledModalBody>
    </>
  );
};
