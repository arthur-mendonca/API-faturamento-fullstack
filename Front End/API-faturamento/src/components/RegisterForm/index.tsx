import { useForm } from "react-hook-form";
import { InputFormComponent } from "../FormComponents/Input";
import { LabelFormComponent } from "../FormComponents/Label";
import { FormTextComponent } from "../FormComponents/Text";
import {
  InsideButtonWrapper,
  PasswordIconToggle,
  StyledButtonWrapper,
  StyledCheckBoxInput,
  StyledInputGroup,
  StyledInputsWrapper,
  StyledRegisterForm,
} from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useTheme } from "styled-components";
import { useState, useContext } from "react";
import { StyledButton } from "../Buttons/style";
import { useNavigate } from "react-router-dom";
import { IRegisterUser } from "../../context/userContext/types";
import { signUpSchema } from "../../schema/registerSchema";
import { UserContext } from "../../context/userContext";
import { ErrorTextComponent } from "../FormComponents/errorText";

export const RegisterFormComponent: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { createUser } = useContext(UserContext);

  const togglePasswordVisibility = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  const theme = useTheme();

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (registerData: IRegisterUser) => {
    const response = await createUser(registerData);
    if (response) {
      navigate("/login");
    }
  };

  return (
    <StyledRegisterForm onSubmit={handleSubmit(onSubmit)}>
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
            register={register("name")}
          />
          <ErrorTextComponent margintop="-14px" marginbottom="-9px">
            {errors.name?.message}
          </ErrorTextComponent>
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
            type="email"
            register={register("email")}
          />
          <ErrorTextComponent margintop="-14px" marginbottom="-9px">
            {errors.email?.message}
          </ErrorTextComponent>
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
            register={register("password")}
          />

          <PasswordIconToggle
            iconId="passwordIcon"
            position="absolute"
            right="27%;"
            bottom="44.2%"
            onClick={(event) => {
              togglePasswordVisibility(event);
            }}>
            <AiOutlineEyeInvisible size={20} color={theme.colors.gray} />
          </PasswordIconToggle>
          <ErrorTextComponent margintop="-14px" marginbottom="-9px">
            {errors.password?.message}
          </ErrorTextComponent>
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
            register={register("passwordConfirmation")}
          />

          <PasswordIconToggle
            iconId="confirmPasswordIcon"
            position="absolute"
            right="4%;"
            bottom="44.2%"
            onClick={(event) => {
              togglePasswordVisibility(event);
            }}>
            <AiOutlineEyeInvisible size={20} color={theme.colors.gray} />
          </PasswordIconToggle>
          <ErrorTextComponent margintop="-14px" marginbottom="-9px">
            {errors.passwordConfirmation?.message}
          </ErrorTextComponent>
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
          required="true"
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
          margin_bottom_mobile="1px"
          className="text_login_page privacy_terms"
          marginleft="37px"
          margintop="10px"
          color={theme.colors.blue}>
          <a>Termos de uso e privacidade</a>
        </FormTextComponent>
      </StyledInputGroup>
      <StyledButtonWrapper
        alignitems="center"
        flexdirection="column"
        display="flex"
        justifycontent="center"
        position="relative"
        top="60px">
        <StyledButton
          background={theme.colors.blue}
          className="register_button"
          padding="10px 102px">
          Cadastrar
        </StyledButton>
        <InsideButtonWrapper
          position="relative"
          top="50px"
          display="flex"
          flexdirection="row"
          width="47%"
          justifycontent="space-around">
          <p className="already_an_user ">Já tem uma conta?</p>
          <a
            className="already_an_user login_link"
            onClick={() => navigateLogin()}>
            Login
          </a>
        </InsideButtonWrapper>
      </StyledButtonWrapper>
    </StyledRegisterForm>
  );
};
