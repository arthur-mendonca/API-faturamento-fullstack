import { ButtonComponent } from "../../Buttons";
import { InputFormComponent } from "../../FormComponents/Input";
import { InputUploadFormComponent } from "../../FormComponents/Input/inputUpload";
import {
  StyledButton,
  StyledCard,
  StyledCloseButton,
  StyledForm,
  StyledFormGroup,
  StyledSpan,
} from "./style";
import uploadIcon from "../../../images/png/upload-na-nuvem 1.png";
import { useRef, useState } from "react";
import pdfIcon from "../../../images/svg/pdf icon.svg";
import { LabelFormComponent } from "../../FormComponents/Label";
import { FormTextComponent } from "../../FormComponents/Text";
import { useTheme } from "styled-components";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegisterReturn,
} from "react-hook-form";

export interface ModalProps {
  uploadedFile: File | null;
  setUploadedFile: React.Dispatch<React.SetStateAction<File | null>>;
  previewUrl: string;
  setPreviewUrl: React.Dispatch<React.SetStateAction<string>>;
  register: UseFormRegisterReturn<any>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
}

export const AcoesPartComponent: React.FC<ModalProps> = ({
  previewUrl,
  setPreviewUrl,
  setUploadedFile,
  uploadedFile,
  register,
  handleSubmit,
}) => {
  const theme = useTheme();
  const [acoesCorretivas, setAcoesCorretivas] = useState([{ name: "" }]);

  const addAcaoCorretiva = () => {
    setAcoesCorretivas([...acoesCorretivas, { name: "" }]);
  };

  const updateAcaoCorretiva = (index: number, name: string) => {
    const newAcoes = [...acoesCorretivas];
    newAcoes[index].name = name;
    setAcoesCorretivas(newAcoes);
  };

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
          />
        </StyledSpan>
      </StyledSpan>
    ));
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileButtonClick = () => {
    fileInputRef.current!.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setUploadedFile(file);
      console.log(file, "arquivo recebido");

      if (file.type.startsWith("image/")) {
        setPreviewUrl(URL.createObjectURL(file));
      } else if (file.type === "application/pdf") {
        setPreviewUrl(pdfIcon);
      }
    }
  };

  const handleDeleteImage = () => {
    setUploadedFile(null);
    setPreviewUrl("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit()}>
      <StyledFormGroup controlId="analysis">
        <StyledCard.Title className="modal_text">
          Análise da causa
        </StyledCard.Title>
        <StyledCard.Text className="text_login_page mt-2">
          Descrição da análise
        </StyledCard.Text>
        <StyledCard border="none">
          <InputFormComponent
            className="mb-3 mt-3"
            placeholder="Escreva algo"
            type="text"
            height="100px"
            as="textarea"
            register={register("description")}
          />
        </StyledCard>
        <StyledCard className="border p-4" height="210px">
          <ButtonComponent
            type="button"
            onClick={handleFileButtonClick}
            background="none"
            border="dashed 2px gray"
            gap="1rem"
            className="d-flex flex-row justify-content-center">
            <img src={uploadIcon} alt="" />
            Upload de anexos
          </ButtonComponent>
          <InputUploadFormComponent
            ref={fileInputRef}
            id="fileInput"
            type="file"
            accept=".png,.pdf"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          {previewUrl && (
            <StyledSpan display="flex" flex_direction="column" margintop="10px">
              <StyledSpan display="flex" flex_direction="row">
                <img
                  src={previewUrl}
                  alt="Preview"
                  style={{ maxHeight: "100px", maxWidth: "100px" }}
                />
                <StyledCloseButton
                  font_size={".7rem"}
                  onClick={() => handleDeleteImage()}
                />
              </StyledSpan>
              <small style={{ marginLeft: "15px" }}>{uploadedFile?.name}</small>
            </StyledSpan>
          )}
        </StyledCard>
      </StyledFormGroup>
      <StyledFormGroup controlId="correctiveActions">
        <StyledCard border="none">
          <StyledCard.Title className="modal_text mt-4">
            Ações corretivas
          </StyledCard.Title>
          <LabelFormComponent>
            <FormTextComponent className="text_login_page" marginleft="40px">
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
    </StyledForm>
  );
};
