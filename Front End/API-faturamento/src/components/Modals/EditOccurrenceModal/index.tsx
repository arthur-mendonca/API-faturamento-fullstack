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
import { IAnalysisUpdate } from "../../../context/analysisContext/types";
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
    createEvidence,
    getAllEvidencesFromOccurrence,
    deleteEvidence,
    evidenceResponse,
  } = useContext(EvidenceContext);

  const [showDetail, setShowDetail] = useState(true);
  const [showActions, setShowActions] = useState(false);
  // const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewEvidenceUrl, setPreviewEvidenceUrl] = useState("");
  const [previewAnalysisUrl, setPreviewAnalysisUrl] = useState("");

  const [screenMobile, setScreenMobile] = useState(window.innerWidth > 500);

  const [occurrenceData, setOccurrenceData] =
    useState<Partial<IOccurrence> | null>(null);

  const [analysisDataUpdate, setAnalysisDataUpdate] = useState<IAnalysisUpdate>(
    {
      filename: new File([], ""),
      description: "",
      fileUrl: "",
      id: undefined,
    }
  );

  const [correctiveActionsDataUpdate, setCorrectiveActionsDataUpdate] =
    useState([]);

  const [evidenceFile, setEvidenceFile] = useState<File | string>("");

  useEffect(() => {
    // console.log(occurrence.id, "ID DA OCCURRENCE");

    const fetchData = async () => {
      const analysesFromOccurrenceResponse = await getAllAnalysesFromOccurrence(
        occurrence.id
      );
      if (analysesFromOccurrenceResponse) {
        console.log(
          analysesFromOccurrenceResponse.analysis[0],
          "ANALYSES FROM OCCURRENCE"
        );
        setAnalysisDataUpdate({
          filename: analysesFromOccurrenceResponse.analysis[0].filename,
          description: analysesFromOccurrenceResponse.analysis[0].description,
          fileUrl: analysesFromOccurrenceResponse.analysis[0].fileUrl,
          id: analysesFromOccurrenceResponse.analysis[0].id,
        });
        // console.log(analysisDataUpdate, "ANALYSIS DATA LOADED");
      }

      const getAllAvidencesResponse = await getAllEvidencesFromOccurrence(
        occurrence.id
      );
      console.log(evidenceResponse, "EVIDENCE RESPONSE");
      if (getAllAvidencesResponse) {
        console.log(evidenceResponse, "evidenceResponse");
        setPreviewEvidenceUrl(evidenceResponse?.evidences[0].fileUrl);
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
  }, [getAllAnalysesFromOccurrence, occurrence.id]);

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

  const handleUpdate = async () => {
    try {
      console.log(occurrenceData, "OCCURRENCE DATA EM HANDLE CREATE");
      const currentOccurrenceId = occurrence.id;
      if (occurrenceData) {
        const updateOccurrenceFunction = await updateOccurrence(
          currentOccurrenceId,
          occurrenceData
        );
        console.log(updateOccurrenceFunction, "UPDATE OCCURRENCE");
      }

      if (!evidences && evidence) {
        createEvidence(occurrence.id, evidence!);
      } else {
        const updatedEvidence = await updateEvidence(evidence.id!, evidence);
        await getAllEvidencesFromOccurrence(occurrence.id);
        console.log(updatedEvidence, "UPDATED EVIDENCE");
      }

      console.log(analysisDataUpdate, "THIS IS ANALYSIS");

      if (analysisDataUpdate) {
        const updateAnalysisFunction = await updateAnalysis(
          analysisDataUpdate.id!,
          analysisDataUpdate
        );
        await getAllAnalysesFromOccurrence(occurrence.id);
        console.log(analysisDataUpdate, "ANALYSIS DATA UPDATE SUCCESSFULLY");
        console.log(updateAnalysisFunction, "UPDATE ANALYSIS FUNCTION");
      }
      const updates = correctiveActionsData.map((action) =>
        updateCorrectiveAction(action.id, action)
      );
      console.log(correctiveActionResponse, "CORRECTIVE ACTIONS RESPONSE");

      await Promise.all(updates);
      closeModal();
      console.log("Dados criados com sucesso!");
    } catch (error) {
      closeModal();
      console.log("Erro ao criar dados:", error);
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
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
                onClick={() => handleUpdate()}
                background={theme.colors.blue}
                className="text_menu_button"
                padding="0 3rem">
                Editar
              </ButtonComponent>
            ) : (
              <StyledMobileButton
                onClick={() => handleUpdate()}
                background_color={theme.colors.blue}
                border="none"
                className="text_menu_button"
                padding="9px 2rem"
                border_radius="20px">
                Editar
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
        <StyledForm onSubmit={handleSubmit(handleUpdate)} id="formModal">
          <EditOccurrenceModalBody
            // uploadedFile={uploadedFile}
            // setUploadedFile={setUploadedFile}
            setPreviewAnalysisUrl={setPreviewAnalysisUrl}
            previewAnalysisUrl={previewAnalysisUrl}
            previewEvidenceUrl={previewEvidenceUrl}
            setPreviewEvidenceUrl={setPreviewEvidenceUrl}
            handleOccurrenceData={handleOccurrenceData}
            showActions={showActions}
            showDetail={showDetail}
            register={register}
            occurrenceData={occurrenceData}
            analyses={analyses}
            correctiveActionsResponse={correctiveActionResponse}
            // evidences={evidences}
            occurrence={occurrence}
            correctiveActionsDataUpdate={correctiveActionsDataUpdate}
            setCorrectiveActionsDataUpdate={setCorrectiveActionsDataUpdate}
            deleteEvidence={deleteEvidence}
            getAllEvidencesFromOccurrence={getAllEvidencesFromOccurrence}
            updateEvidence={updateEvidence}
            setValue={setValue}
            analysisDataUpdate={analysisDataUpdate}
            setAnalysisDataUpdate={setAnalysisDataUpdate}
            evidenceFile={evidenceFile}
            setEvidenceFile={setEvidenceFile}
          />
        </StyledForm>
      </StyledModalBody>
    </>
  );
};
