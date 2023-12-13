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
  const { createOccurrence } = useContext(OccurrenceContext);
  const { createAnalysis } = useContext(AnalysisContext);
  const { createCorrectiveAction } = useContext(CorrectiveActionContext);
  const { createEvidence } = useContext(EvidenceContext);

  const [showDetail, setShowDetail] = useState(true);
  const [showActions, setShowActions] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewEvidenceUrl, setPreviewEvidenceUrl] = useState("");
  const [previewAnalysisUrl, setPreviewAnalysisUrl] = useState("");

  const [screenMobile, setScreenMobile] = useState(window.innerWidth > 500);

  useEffect(() => {
    const handleResize = () => {
      setScreenMobile(window.innerWidth > 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

            <p className="modal_text">Nova ocorrência</p>
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
                Criar
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
