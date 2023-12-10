import { useContext, useRef } from "react";
import {
  StyledCloseButton,
  StyledSpan,
  StyledModalBody,
  StyledForm,
  StyledFormGroup,
  StyledCard,
} from "./style";
import { ModalContext } from "../../../context/modalContext";
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

export const CreateOccurrenceModal: React.FC = ({ ...props }) => {
  const { closeModal } = useContext(ModalContext);
  const theme = useTheme();

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
      {
        ("");
      }
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
      <StyledModalBody className="d-flex border" {...props}>
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
            <ButtonComponent>Detalhes</ButtonComponent>
            <ButtonComponent background="black">
              Análises e ações
            </ButtonComponent>
          </StyledSpan>
        </StyledSpan>
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
        <StyledCard className="border p-4">
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
        </StyledCard>
      </StyledModalBody>
    </>
  );
};
