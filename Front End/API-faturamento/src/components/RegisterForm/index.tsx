import { useForm } from "react-hook-form";
import { InputFormComponent } from "../FormComponents/Input";
import { LabelFormComponent } from "../FormComponents/Label";
import { FormTextComponent } from "../FormComponents/Text";
import {
  PasswordIconToggle,
  StyledCheckBoxInput,
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
            bottom="40.9%"
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
            bottom="40.9%"
            onClick={(event) => {
              togglePasswordVisibility(event);
            }}>
            <AiOutlineEyeInvisible size={20} color={theme.colors.gray} />
          </PasswordIconToggle>
        </StyledInputGroup>
      </StyledInputsWrapper>
      <StyledInputGroup display="flex" flexdirection="column">
        <FormTextComponent
          margintop="20px"
          className="text_login_page privacy_terms"
          marginbottom="25px">
          Termos de uso e privacidade
        </FormTextComponent>
        <StyledCheckBoxInput
          className="checkbox_text"
          textmaxwidth="580px"
          inputboxshadow="0 5px 4px rgba(0,0,0,0.2);"
          labelfontweight="600"
          inputborderradius="10px"
          inputbordercolor={theme.colors.blue}
          inputborderwidth="2px"
          inputfontsize="24px"
          position="relative"
          left="18px"
          label="Ao clicar neste botão, eu concordo com os  termos de uso e privacidade da nossa empresa."
        />
        <FormTextComponent
          className="text_login_page privacy_terms"
          marginleft="37px"
          margintop="10px"
          color={theme.colors.blue}>
          <a>Termos de uso e privacidade</a>
        </FormTextComponent>
      </StyledInputGroup>
    </StyledRegisterForm>
  );
};
