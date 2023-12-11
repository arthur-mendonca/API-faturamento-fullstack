import { useRef } from "react";
import {
  StyledCloseButton,
  StyledSpan,
  StyledForm,
  StyledFormGroup,
  StyledCard,
} from "./style";
import { ButtonComponent } from "../../Buttons";
import { LabelFormComponent } from "../../FormComponents/Label";
import { FormTextComponent } from "../../FormComponents/Text";
import { InputFormComponent } from "../../FormComponents/Input";
import uploadIcon from "../../../images/png/upload-na-nuvem 1.png";
import { InputUploadFormComponent } from "../../FormComponents/Input/inputUpload";
import pdfIcon from "../../../images/svg/pdf icon.svg";
import { CreateOccurrenceProps } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { detalhesPartSchema } from "../../../schema/createOccurrenceSchema";

export const DetalhesPartComponent: React.FC<CreateOccurrenceProps> = ({
  previewUrl,
  setPreviewUrl,
  setUploadedFile,
  uploadedFile,
  handleOccurrenceData,
  handleEvidence,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileButtonClick = () => {
    fileInputRef.current!.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(detalhesPartSchema),
  });

  const submitForm = (data) => {
    console.log(data, "submitForm data");
    if (handleOccurrenceData) {
      handleOccurrenceData({
        name: data.name,
        origin: data.origin,
        description: data.description,
      });
    }
    if (uploadedFile && handleEvidence) {
      handleEvidence(uploadedFile);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitForm)}>
      <StyledFormGroup>
        <LabelFormComponent>
          <FormTextComponent className="text_login_page">
            Nome da ocorrência
          </FormTextComponent>
        </LabelFormComponent>
        <InputFormComponent
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
            onClick={() => handleFileButtonClick()}
            background="none"
            border="dashed 2px gray"
            gap="1rem"
            className="d-flex flex-row justify-content-center">
            <img src={uploadIcon} alt="ícone de upload" />
            Upload de evidências
          </ButtonComponent>
          <InputUploadFormComponent
            ref={fileInputRef}
            id="fileInput"
            type="file"
            accept=".png,.pdf"
            onChange={handleFileChange}
            style={{ display: "none" }}
            register={register("filename")}
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
    </StyledForm>
  );
};
