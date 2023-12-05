import { useForm } from "react-hook-form";
import { InputFormComponent } from "../FormComponents/Input";
import { LabelFormComponent } from "../FormComponents/Label";
import { FormTextComponent } from "../FormComponents/Text";
import {
  PasswordIconToggle,
  StyledInputGroup,
  StyledInputsWrapper,
  StyledRegisterForm,
} from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useTheme } from "styled-components";
import { useState } from "react";

export const RegisterFormComponent: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setPasswordVisible(!passwordVisible);
  };
  const theme = useTheme();
  return (
    <StyledRegisterForm>
      <StyledInputsWrapper
        display="flex"
        justifycontent="space-between"
        marginbottom="10px">
        <StyledInputGroup width="47%">
          <LabelFormComponent>
            <FormTextComponent className="text_login_page">
              Nome
            </FormTextComponent>
          </LabelFormComponent>
          <InputFormComponent
            className="mb-3"
            placeholder="Insira seu nome"
            type="text"
            borderradius="10px"
          />
        </StyledInputGroup>
        <StyledInputGroup width="47%">
          <LabelFormComponent>
            <FormTextComponent className="text_login_page">
              E-mail
            </FormTextComponent>
          </LabelFormComponent>
          <InputFormComponent
            className="mb-3"
            placeholder="Insira seu e-mail"
            type="text"
          />
        </StyledInputGroup>
      </StyledInputsWrapper>
      <StyledInputsWrapper display="flex" justifycontent="space-between">
        <StyledInputGroup width="47%">
          <LabelFormComponent>
            <FormTextComponent className="text_login_page">
              Senha
            </FormTextComponent>
          </LabelFormComponent>
          <InputFormComponent
            className="mb-3"
            placeholder="Insira uma senha"
            type={passwordVisible ? "text" : "password"}
          />
          <PasswordIconToggle
            position="absolute"
            right="27%;"
            bottom="33.8%"
            onClick={(event) => {
              togglePasswordVisibility(event);
            }}>
            <AiOutlineEyeInvisible size={20} color={theme.colors.gray} />
          </PasswordIconToggle>
        </StyledInputGroup>

        <StyledInputGroup width="47%">
          <LabelFormComponent>
            <FormTextComponent className="text_login_page">
              Confirme sua senha
            </FormTextComponent>
          </LabelFormComponent>
          <InputFormComponent
            className="mb-3"
            placeholder="Confirma senha"
            type={passwordVisible ? "text" : "password"}
          />
          <PasswordIconToggle
            position="absolute"
            right="4%;"
            bottom="33.8%"
            onClick={(event) => {
              togglePasswordVisibility(event);
            }}>
            <AiOutlineEyeInvisible size={20} color={theme.colors.gray} />
          </PasswordIconToggle>
        </StyledInputGroup>
      </StyledInputsWrapper>
    </StyledRegisterForm>
  );
};
