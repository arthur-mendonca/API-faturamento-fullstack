import { ButtonComponent } from "../Buttons";
import { InputFormComponent } from "../FormComponents/Input";
import { LabelFormComponent } from "../FormComponents/Label";
import { FormTextComponent } from "../FormComponents/Text";
import {
  PasswordIconToggle,
  StyledButtonGroup,
  StyledInputGroup,
  StyledLoginForm,
} from "./style";
import { useTheme } from "styled-components";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useContext, useState } from "react";
import { formSchema } from "../../schema/loginFormSchema";
import { ILoginUser } from "../../context/userContext/types";
import { UserContext } from "../../context/userContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const LoginFormComponent: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { loginUser } = useContext(UserContext);

  const navigate = useNavigate();

  const togglePasswordVisibility = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setPasswordVisible(!passwordVisible);
  };
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>({
    resolver: zodResolver(formSchema),
  });

  const submitLogin: SubmitHandler<ILoginUser> = async (data: ILoginUser) => {
    const loginResponse = await loginUser(data);
    if (loginResponse && loginResponse.token) {
      navigate("/dashboard");
    }
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(submitLogin)}>
      <StyledLoginForm.Group controlId="formEmail">
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
      </StyledLoginForm.Group>
      <StyledLoginForm.Group controlId="formPassword">
        <LabelFormComponent>
          <FormTextComponent className="text_login_page">
            Senha
          </FormTextComponent>
        </LabelFormComponent>
        <StyledInputGroup>
          <InputFormComponent
            placeholder="Insira sua senha"
            type={passwordVisible ? "text" : "password"}
            register={register("password")}
          />
          <PasswordIconToggle
            position="absolute"
            right="10px;"
            onClick={(event) => {
              togglePasswordVisibility(event);
            }}>
            <AiOutlineEyeInvisible size={20} color={theme.colors.gray} />
          </PasswordIconToggle>
        </StyledInputGroup>
      </StyledLoginForm.Group>
      <StyledButtonGroup display="flex" margintop="50px">
        <ButtonComponent
          fontsize="18px"
          className="text_login_button"
          name="Entrar"
          background={theme.colors.blue}
          padding={theme.buttons.padding.entrarButton}
          boxshadow="0 5px 4px rgba(0,0,0,0.2);"></ButtonComponent>
        <a>
          <p className="text_forgot_password">Esqueceu a senha?</p>
        </a>
      </StyledButtonGroup>
    </StyledLoginForm>
  );
};
