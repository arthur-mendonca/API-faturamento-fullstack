import { useEffect, useRef, useState } from "react";
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
import { CreateOccurrenceProps } from "./types";
import { useTheme } from "styled-components";
import { IOccurrenceCreate } from "../../../context/occurrencesContext/types";

export const CreateOccurrenceModalBody: React.FC<CreateOccurrenceProps> = ({
  setPreviewAnalysisUrl,
  previewAnalysisUrl,
  previewEvidenceUrl,
  setPreviewEvidenceUrl,
  setUploadedFile,
  uploadedFile,
  handleOccurrenceData,
  showActions,
  showDetail,
  register,
  occurrenceData,
  setEvidence,
  setAnalysisData,
  analysisData,
  correctiveActionsData,
  setCorrectiveActionsData,
}) => {
  const theme = useTheme();
  const [acoesCorretivas, setAcoesCorretivas] = useState([{ name: "" }]);

  const addAcaoCorretiva = () => {
    setAcoesCorretivas((acoes) => [...acoes, { name: "" }]);
  };

  const updateAcaoCorretiva = (index: number, name: string) => {
    setAcoesCorretivas((acoes) =>
      acoes.map((acao, i) => (i === index ? { ...acao, name } : acao))
    );
  };

  useEffect(() => {
    setCorrectiveActionsData(acoesCorretivas);
  }, [acoesCorretivas]);

  useEffect(() => {
    console.log(correctiveActionsData, "acoes corretivas atualizadas");
  }, [correctiveActionsData]);

  const renderAcoesCorretivas = () => {
    return acoesCorretivas.map((acao, index) => (
      <StyledSpan
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

  const handleEvidenceFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setEvidence(file);

      if (file.type.startsWith("image/")) {
        setPreviewEvidenceUrl(URL.createObjectURL(file));
      } else if (file.type === "application/pdf") {
        setPreviewEvidenceUrl(pdfIcon);
      }
    }
  };

  const handleAnalysisFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setAnalysisData({ ...analysisData, file: file });

      if (file.type.startsWith("image/")) {
        setPreviewAnalysisUrl(URL.createObjectURL(file));
      } else if (file.type === "application/pdf") {
        setPreviewAnalysisUrl(pdfIcon);
      }
    }
  };

  const handleDeleteEvidence = () => {
    setUploadedFile(null);
    setPreviewEvidenceUrl("");
    setEvidence(null);
    if (evidenceFileInputRef.current) {
      evidenceFileInputRef.current.value = "";
    }
  };

  const handleDeleteAnalysisUpload = () => {
    setUploadedFile(null);
    setPreviewAnalysisUrl("");
    setAnalysisData({ ...analysisData, file: null });
    if (analysisFileInputRef.current) {
      analysisFileInputRef.current.value = "";
    }
  };

  const handleOccurrenceDataDuplicate = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof IOccurrenceCreate
  ) => {
    const newValue = e.currentTarget.value;
    handleOccurrenceData({ ...occurrenceData, [field]: newValue });
    console.log(occurrenceData);
  };

  const handleAnalysisDataDuplicate = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAnalysisData({ ...analysisData, description: e.currentTarget.value });
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
              register={register("description")}
            />
          </StyledFormGroup>
          <StyledFormGroup>
            <StyledCard className="border p-4" height="230px">
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
                  <StyledSpan display="flex" flex_direction="row">
                    <img
                      src={previewEvidenceUrl}
                      alt="Preview"
                      style={{ maxHeight: "100px", maxWidth: "100px" }}
                    />
                    <StyledCloseButton
                      font_size={".7rem"}
                      onClick={() => handleDeleteEvidence()}
                    />
                  </StyledSpan>
                  <small style={{ marginLeft: "15px" }}>
                    {uploadedFile?.name}
                  </small>
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
                register={register("analysisDescription")}
              />
            </StyledCard>
            <StyledCard className="border p-4" height="210px">
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
              {previewAnalysisUrl && (
                <StyledSpan
                  display="flex"
                  flex_direction="column"
                  margintop="10px">
                  <StyledSpan display="flex" flex_direction="row">
                    <img
                      src={previewAnalysisUrl}
                      alt="Preview"
                      style={{ maxHeight: "100px", maxWidth: "100px" }}
                    />
                    <StyledCloseButton
                      font_size={".7rem"}
                      onClick={() => handleDeleteAnalysisUpload()}
                    />
                  </StyledSpan>
                  <small style={{ marginLeft: "15px" }}>
                    {uploadedFile?.name}
                  </small>
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
