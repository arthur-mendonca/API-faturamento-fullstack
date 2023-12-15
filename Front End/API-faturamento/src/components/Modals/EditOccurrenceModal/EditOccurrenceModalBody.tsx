import { useContext, useEffect, useRef, useState } from "react";
import {
  StyledCloseButton,
  StyledSpan,
  StyledFormGroup,
  StyledCard,
  StyledButton,
} from "./style";
import { ButtonComponent } from "../../Buttons";
import { LabelFormComponent } from "../../FormComponents/Label";
import { FormTextComponent } from "../../FormComponents/Text";
import { InputFormComponent } from "../../FormComponents/Input";
import uploadIcon from "../../../images/png/upload-na-nuvem 1.png";
import { InputUploadFormComponent } from "../../FormComponents/Input/inputUpload";
import pdfIcon from "../../../images/svg/pdf icon.svg";
import { useTheme } from "styled-components";
import { IOccurrenceCreate } from "../../../context/occurrencesContext/types";
import { EditOccurrenceProps } from "./types";
import { AnalysisContext } from "../../../context/analysisContext";
import { EvidenceContext } from "../../../context/evidencesContext";
import { CorrectiveActionContext } from "../../../context/correctiveActionsContext";

export const EditOccurrenceModalBody: React.FC<EditOccurrenceProps> = ({
  setPreviewAnalysisUrl,
  previewAnalysisUrl,
  previewEvidenceUrl,
  setPreviewEvidenceUrl,
  setUploadedFile,
  handleOccurrenceData,
  showActions,
  showDetail,
  register,
  occurrenceData,
  setAnalysisDataUpdate,
  analysisData,
  correctiveActionsDataUpdate,
  setCorrectiveActionsDataUpdate,
  occurrence,
  deleteEvidence,
  updateEvidence,
  setValue,
  analysisDataUpdate,
  setEvidenceFile,
}) => {
  const theme = useTheme();

  const {
    updateAnalysis,
    getAllAnalysesFromOccurrence,
    analysesResponse,
    setAnalysesResponse,
  } = useContext(AnalysisContext);

  const {
    evidenceResponse,
    getAllEvidencesFromOccurrence,
    setEvidenceResponse,
    createEvidence,
  } = useContext(EvidenceContext);

  const { correctiveActionResponse, getAllCorrectiveActionsFromOccurrence } =
    useContext(CorrectiveActionContext);

  const [isPreviewInitialized, setIsPreviewInitialized] = useState(false);

  const previousEvidenceRef = useRef();

  const currentEvidence = evidenceResponse?.evidences[0];

  useEffect(() => {
    if (occurrence) {
      setValue("name", occurrence.name);
      setValue("origin", occurrence.origin);
      setValue("description", occurrence.description);
    }
    const fetchData = async () => {
      getAllEvidencesFromOccurrence(occurrence.id);

      const analysesFromOccurrenceResponse = await getAllAnalysesFromOccurrence(
        occurrence.id
      );
      if (analysesFromOccurrenceResponse) {
        setAnalysisDataUpdate({
          filename: analysesFromOccurrenceResponse.analysis[0].filename,
          description: analysesFromOccurrenceResponse.analysis[0].description,
          fileUrl: analysesFromOccurrenceResponse.analysis[0].fileUrl,
          id: analysesFromOccurrenceResponse.analysis[0].id,
        });
        setValue(
          "analysisDescription",
          analysesFromOccurrenceResponse.analysis[0].description
        );
      }
      const getAllCorrectiveActionsResponse =
        await getAllCorrectiveActionsFromOccurrence(occurrence.id);
      if (getAllCorrectiveActionsResponse) {
        setCorrectiveActionsDataUpdate(
          correctiveActionResponse?.corrective_action
        );
      }
    };
    fetchData();

    const hasEvidenceChanged =
      currentEvidence &&
      currentEvidence.fileUrl !== previousEvidenceRef.current;
    if (
      (!isPreviewInitialized || hasEvidenceChanged) &&
      currentEvidence &&
      currentEvidence.fileUrl
    ) {
      getAllEvidencesFromOccurrence(currentEvidence.id);
      setPreviewEvidenceUrl(currentEvidence.fileUrl);
      setIsPreviewInitialized(true);

      previousEvidenceRef.current = currentEvidence.fileUrl;
    }
  }, [getAllAnalysesFromOccurrence]);

  const addAcaoCorretiva = () => {
    setCorrectiveActionsDataUpdate((prevActions) => [
      ...prevActions,
      { name: "", id: null },
    ]);
  };

  const updateAcaoCorretiva = (index: number, name: string) => {
    setCorrectiveActionsDataUpdate((acoes) =>
      acoes.map((acao, i) => (i === index ? { ...acao, name } : acao))
    );
  };

  const renderAcoesCorretivas = () => {
    return correctiveActionsDataUpdate.map((acao, index) => (
      <StyledSpan
        key={index}
        margintop="-15px"
        display="flex"
        flex_direction="column"
        justify_content="center">
        <StyledSpan className="d-flex flex-column " width="90%">
          <StyledSpan
            display="flex"
            flex_direction="column"
            justify_content="center"
            align_items="center"
            position="relative"
            top="40px"
            style={{
              backgroundColor: `${theme.colors.blue}`,
              color: `${theme.colors.white}`,
              borderRadius: "50%",
              width: "28px",
              height: "28px",
            }}>
            {index + 1}
          </StyledSpan>
          <InputFormComponent
            margin_left="40px"
            key={index}
            value={acao.name}
            onChange={(e) => updateAcaoCorretiva(index, e.target.value)}
            register={register(`correctiveActions[${index}].name`)}
          />
        </StyledSpan>
      </StyledSpan>
    ));
  };

  const evidenceFileInputRef = useRef<HTMLInputElement>(null);
  const analysisFileInputRef = useRef<HTMLInputElement>(null);

  const handleEvidenceFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setEvidenceFile(file);

      if (!evidenceResponse?.evidences[0]) {
        const createEvidenceFunction = await createEvidence(
          occurrence.id,
          file
        );
        getAllEvidencesFromOccurrence(occurrence.id);
      }
      if (evidenceResponse?.evidences[0]) {
        const updateEvidenceResponse = await updateEvidence(
          evidenceResponse?.evidences[0].id,
          file
        );
        getAllEvidencesFromOccurrence(occurrence.id);
      }
      if (file.type.startsWith("image/")) {
        setPreviewEvidenceUrl(URL.createObjectURL(file));
      } else if (file.type === "application/pdf") {
        setPreviewEvidenceUrl(pdfIcon);
      }
    }
  };

  const handleAnalysisFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = file.type.startsWith("image/")
        ? URL.createObjectURL(file)
        : file.type === "application/pdf"
        ? pdfIcon
        : null;
      if (previewUrl) setPreviewAnalysisUrl(previewUrl);

      if (analysisDataUpdate.id) {
        const updatedAnalysis = await updateAnalysis(
          analysisDataUpdate.id,
          undefined,
          file
        );
      }
      const newUrlObject = URL.createObjectURL(file);
      setAnalysisDataUpdate((prevState) => ({
        ...prevState,
        fileUrl: newUrlObject,
      }));
      await getAllAnalysesFromOccurrence(occurrence.id);
    }
  };

  const handleDeleteEvidence = async () => {
    if (currentEvidence?.id) {
      await deleteEvidence(currentEvidence?.id);
      const updatedEvidences = await getAllEvidencesFromOccurrence(
        occurrence.id
      );
      if (updatedEvidences) setEvidenceResponse(updatedEvidences);
    }

    setPreviewEvidenceUrl("");
    setEvidenceFile("");

    if (evidenceFileInputRef.current) {
      evidenceFileInputRef.current.value = "";
    }
  };

  const handleDeleteAnalysisUpload = async () => {
    // setUploadedFile(null);
    setPreviewAnalysisUrl("");
    // setAnalysisData({ ...analysisData, file: null });

    console.log(analysisDataUpdate);

    if (analysisDataUpdate.id) {
      const deleteAnalysisImg = await updateAnalysis(
        analysisDataUpdate.id,
        undefined,
        null
      );
      setAnalysisDataUpdate((prevState) => ({ ...prevState, fileUrl: "" }));
      await getAllAnalysesFromOccurrence(occurrence.id);
      console.log(deleteAnalysisImg, "IMAGEM ATUALIZADA");
    }

    if (analysisFileInputRef.current) {
      analysisFileInputRef.current.value = "";
    }
    if (analysesResponse) {
      const updatedAnalyses = analysesResponse.analysis.map((analysis) => {
        if (analysis.id === analysisData.id) {
          return { ...analysis, filename: file };
        }
        return analysis;
      });
      setAnalysesResponse({ ...analysesResponse, analysis: updatedAnalyses });
    }
  };

  const handleOccurrenceDataDuplicate = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof IOccurrenceCreate
  ) => {
    const newValue = e.currentTarget.value;

    handleOccurrenceData({ ...occurrenceData, [field]: newValue });
    setValue(field, newValue);
  };

  const handleAnalysisDataDuplicate = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.currentTarget.value;
    setAnalysisDataUpdate((prevState) => ({
      ...prevState,
      description: newValue,
    }));
  };

  return (
    <>
      {showDetail && (
        <>
          <StyledFormGroup>
            <LabelFormComponent>
              <FormTextComponent className="text_login_page">
                Nome da ocorrência
              </FormTextComponent>
            </LabelFormComponent>
            <InputFormComponent
              onChange={(e) => handleOccurrenceDataDuplicate(e, "name")}
              className="mb-3"
              placeholder="Insira um nome"
              type="text"
              value={occurrenceData?.name}
              register={register("name")}
            />
          </StyledFormGroup>
          <StyledFormGroup>
            <LabelFormComponent>
              <FormTextComponent className="text_login_page">
                Origem da não conformidade
              </FormTextComponent>
            </LabelFormComponent>
            <InputFormComponent
              onChange={(e) => handleOccurrenceDataDuplicate(e, "origin")}
              className="mb-3"
              placeholder="Insira o nome da origem"
              type="text"
              value={occurrenceData?.origin}
              register={register("origin")}
            />
          </StyledFormGroup>
          <StyledFormGroup className="d-flex flex-column">
            <LabelFormComponent>
              <FormTextComponent className="text_login_page">
                Descrição da ocorrência
              </FormTextComponent>
            </LabelFormComponent>
            <InputFormComponent
              onChange={(e) => handleOccurrenceDataDuplicate(e, "description")}
              className="mb-3"
              placeholder="Escreva algo"
              type="text"
              height="100px"
              as="textarea"
              value={occurrenceData?.description}
              register={register("description")}
            />
          </StyledFormGroup>
          <StyledFormGroup>
            <StyledCard className="border p-3" height="230px">
              <ButtonComponent
                type="button"
                onClick={() => evidenceFileInputRef.current?.click()}
                background="none"
                border="dashed 2px gray"
                gap="1rem"
                className="d-flex flex-row justify-content-center">
                <img src={uploadIcon} alt="ícone de upload" />
                Upload de evidências
              </ButtonComponent>

              <InputUploadFormComponent
                ref={evidenceFileInputRef}
                id="fileInput"
                type="file"
                accept=".png,.pdf"
                onChange={handleEvidenceFileChange}
                style={{ display: "none" }}
                register={register("filename")}
              />

              {previewEvidenceUrl && (
                <StyledSpan
                  display="flex"
                  flex_direction="column"
                  margintop="10px">
                  <StyledSpan
                    display="flex"
                    flex_direction="row"
                    className="d-flex flex-column">
                    <StyledCloseButton
                      position="relative"
                      left="25%"
                      top="10%"
                      font_size={".7rem"}
                      onClick={() => handleDeleteEvidence()}
                    />
                    {previewEvidenceUrl.endsWith(".pdf") ? (
                      <img
                        src={pdfIcon}
                        alt="Preview PDF"
                        style={{ maxHeight: "100px", maxWidth: "100px" }}
                      />
                    ) : (
                      <img
                        src={previewEvidenceUrl}
                        alt="Preview"
                        style={{ maxHeight: "100px", maxWidth: "100px" }}
                      />
                    )}
                    <a
                      className="view_evidences_file"
                      href={previewEvidenceUrl}
                      target="_blank"
                      rel="noopener noreferrer">
                      {previewEvidenceUrl.endsWith(".pdf")
                        ? "Visualizar PDF"
                        : "Visualizar imagem"}
                    </a>
                    <small style={{ marginLeft: "15px" }}>
                      {previewEvidenceUrl?.name}
                    </small>
                  </StyledSpan>
                </StyledSpan>
              )}
            </StyledCard>
          </StyledFormGroup>
        </>
      )}
      {showActions && (
        <>
          <StyledFormGroup>
            <StyledCard.Title className="modal_text">
              Análise da causa
            </StyledCard.Title>
            <StyledCard.Text className="text_login_page mt-2">
              Descrição da análise
            </StyledCard.Text>
            <StyledCard border="none">
              <InputFormComponent
                onChange={(e) => handleAnalysisDataDuplicate(e)}
                className="mb-3 mt-3"
                placeholder="Escreva algo"
                type="text"
                height="100px"
                as="textarea"
                value={analysisDataUpdate.description}
                register={register("analysisDescription")}
              />
            </StyledCard>
            <StyledCard className="border p-4" height="210px" overflowY="auto">
              <ButtonComponent
                type="button"
                onClick={() => analysisFileInputRef.current?.click()}
                background="none"
                border="dashed 2px gray"
                gap="1rem"
                className="d-flex flex-row justify-content-center">
                <img src={uploadIcon} alt="" />
                Upload de anexos
              </ButtonComponent>
              <InputUploadFormComponent
                ref={analysisFileInputRef}
                id="fileInput"
                type="file"
                accept=".png,.pdf"
                onChange={handleAnalysisFileChange}
                register={register("filename")}
                style={{ display: "none" }}
              />
              {analysisDataUpdate && analysisDataUpdate.fileUrl && (
                <StyledSpan
                  display="flex"
                  flex_direction="column"
                  margintop="10px">
                  <StyledSpan
                    display="flex"
                    flex_direction="row"
                    className="d-flex flex-column p-2">
                    {analysisDataUpdate?.fileUrl.endsWith(".pdf") ? (
                      <img
                        src={pdfIcon}
                        alt="Preview"
                        style={{ maxHeight: "100px", maxWidth: "100px" }}
                      />
                    ) : (
                      <img
                        src={analysisDataUpdate?.fileUrl}
                        alt="Preview"
                        style={{ maxHeight: "100px", maxWidth: "100px" }}
                      />
                    )}
                    <a
                      className="view_evidences_file"
                      href={analysisDataUpdate?.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer">
                      {previewAnalysisUrl.endsWith(".pdf")
                        ? "Visualizar PDF"
                        : "Visualizar imagem"}
                    </a>
                    <StyledCloseButton
                      font_size={".7rem"}
                      onClick={() => handleDeleteAnalysisUpload()}
                    />
                  </StyledSpan>
                  <>
                    <small style={{ marginLeft: "15px" }}>
                      {analysisDataUpdate.filename}
                    </small>
                  </>
                </StyledSpan>
              )}
            </StyledCard>
          </StyledFormGroup>
          <StyledFormGroup>
            <StyledCard border="none">
              <StyledCard.Title className="modal_text mt-4">
                Ações corretivas
              </StyledCard.Title>
              <LabelFormComponent>
                <FormTextComponent
                  className="text_login_page"
                  marginleft="40px">
                  Nome da ação corretiva
                </FormTextComponent>
              </LabelFormComponent>
              {renderAcoesCorretivas()}
              <StyledSpan margintop="10px">
                <StyledButton
                  border="none"
                  type="button"
                  background_color="white"
                  className="add_new_corrective_action_button"
                  onClick={() => addAcaoCorretiva()}>
                  + Adicionar nova ação corretiva
                </StyledButton>
              </StyledSpan>
            </StyledCard>
          </StyledFormGroup>
        </>
      )}
    </>
  );
};
