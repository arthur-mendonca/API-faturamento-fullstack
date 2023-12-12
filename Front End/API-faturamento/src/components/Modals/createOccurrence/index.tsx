import { useContext, useState } from "react";
import theme from "../../../global/styles/theme";
import { ButtonComponent } from "../../Buttons";
import {
  StyledCloseButton,
  StyledForm,
  StyledModalBody,
  StyledSpan,
} from "./style";
import { ModalContext } from "../../../context/modalContext";
import { CreateOccurrenceModalBody } from "./CreateOccurrenceModalBody";
import { ModalButtonComponent } from "../../Buttons/buttonCreateModal";
import { IOccurrenceCreate } from "../../../context/occurrencesContext/types";
import { ICreteAnalysis } from "../../../context/analysisContext/types";
import { ICreateCorrectiveAction } from "../../../context/correctiveActionsContext/types";
import { EvidenceType } from "../../../context/evidencesContext/types";
import { OccurrenceContext } from "../../../context/occurrencesContext";
import { AnalysisContext } from "../../../context/analysisContext";
import { CorrectiveActionContext } from "../../../context/correctiveActionsContext";
import { EvidenceContext } from "../../../context/evidencesContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { combinedSchema } from "../../../schema/createOccurrenceSchema";

export const CreateOccurrenceModal: React.FC = () => {
  const { closeModal } = useContext(ModalContext);
  const { createOccurrence, occurrenceId } = useContext(OccurrenceContext);
  const { createAnalysis } = useContext(AnalysisContext);
  const { createCorrectiveAction } = useContext(CorrectiveActionContext);
  const { createEvidence } = useContext(EvidenceContext);

  const [showDetail, setShowDetail] = useState(true);
  const [showActions, setShowActions] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewEvidenceUrl, setPreviewEvidenceUrl] = useState("");
  const [previewAnalysisUrl, setPreviewAnalysisUrl] = useState("");

  const [occurrenceData, setOccurrenceData] =
    useState<IOccurrenceCreate | null>(null);
  const [analysisData, setAnalysisData] = useState<ICreteAnalysis>({
    file: new File([], ""),
    description: "",
  });
  const [correctiveActionsData, setCorrectiveActionsData] = useState<
    ICreateCorrectiveAction[]
  >([]);
  const [evidence, setEvidence] = useState<EvidenceType | null>(null);
  const userId = localStorage.getItem("@USERID");

  const handleOccurrenceData = (data: IOccurrenceCreate) => {
    setOccurrenceData(data);
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
    console.log(occurrenceData, "occurrenceData");
    console.log(analysisData, "analysisData");
    console.log(correctiveActionsData, "correctiveActionsData");
    console.log(evidence, "evidence");
    try {
      const newOccurrenceId = await createOccurrence(+userId!, occurrenceData!);
      console.log(newOccurrenceId, "OCCURRENCE CRIADA");
      if (newOccurrenceId) {
        await createEvidence(newOccurrenceId!, evidence!);

        await createAnalysis(
          newOccurrenceId!,
          analysisData!.file,
          analysisData!.description!
        );
        const correctiveActionNames = correctiveActionsData.map(
          (action) => action.name
        );
        await Promise.all(
          correctiveActionNames.map((name: string) =>
            createCorrectiveAction(newOccurrenceId!, [{ name }])
          )
        );
        console.log("Dados criados com sucesso!");
      }
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
          type="submit"
          form="formModal"
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
        <StyledForm onSubmit={handleSubmit(handleCreate)} id="formModal">
          <CreateOccurrenceModalBody
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
            occurrenceData={occurrenceData}
            evidence={evidence}
            setEvidence={setEvidence}
            analysisData={analysisData}
            setAnalysisData={setAnalysisData}
            correctiveActionsData={correctiveActionsData}
            setCorrectiveActionsData={setCorrectiveActionsData}
          />
        </StyledForm>
      </StyledModalBody>
    </>
  );
};
