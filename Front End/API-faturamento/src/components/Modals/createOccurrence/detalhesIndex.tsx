import { useRef, useState } from "react";
import {
  StyledCloseButton,
  StyledSpan,
  StyledForm,
  StyledFormGroup,
  StyledCard,
} from "./style";
import { ButtonComponent } from "../../Buttons";
import { useTheme } from "styled-components";
import { LabelFormComponent } from "../../FormComponents/Label";
import { FormTextComponent } from "../../FormComponents/Text";
import { InputFormComponent } from "../../FormComponents/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createEvidenceSchema } from "../../../schema/createEvidenceSchema";
import uploadIcon from "../../../images/png/upload-na-nuvem 1.png";
import { InputUploadFormComponent } from "../../FormComponents/Input/inputUpload";
import pdfIcon from "../../../images/svg/pdf icon.svg";

export const DetalhesPartComponent: React.FC = ({ ...props }) => {
  const theme = useTheme();

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleCreate = () => {
    console.log("criar");
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createEvidenceSchema),
  });
  return (
    <>
      {/* <StyledModalBody className="d-flex border" {...props}> */}
      <StyledForm>
        <StyledFormGroup controlId="occurrenceName">
          <LabelFormComponent>
            <FormTextComponent className="text_login_page">
              Nome da ocorrência
            </FormTextComponent>
          </LabelFormComponent>
          <InputFormComponent
            className="mb-3"
            placeholder="Insira um nome"
            type="text"
            // register={register("email")}
          />
        </StyledFormGroup>
        <StyledFormGroup controlId="occurrenceOrigin">
          <LabelFormComponent>
            <FormTextComponent className="text_login_page">
              Origem da não conformidade
            </FormTextComponent>
          </LabelFormComponent>
          <InputFormComponent
            className="mb-3"
            placeholder="Insira o nome da origem"
            type="text"
            // register={register("email")}
          />
        </StyledFormGroup>
        <StyledFormGroup
          controlId="occurrenceDescription"
          className="d-flex flex-column">
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
            // register={register("email")}
          />
        </StyledFormGroup>
      </StyledForm>
      <StyledCard className="border p-4" height="230px">
        <ButtonComponent
          type="button"
          onClick={handleFileButtonClick}
          background="none"
          border="dashed 2px gray"
          gap="1rem"
          className="d-flex flex-row justify-content-center">
          <img src={uploadIcon} alt="" />
          Upload de evidências
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
      {/* </StyledModalBody> */}
    </>
  );
};
