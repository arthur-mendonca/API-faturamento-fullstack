import { useTheme } from "styled-components";
import {
  StyledGroup,
  StyledRegisterRightColumnContainer,
  StyledText,
} from "./style";
import { LogoComponent } from "../LogoComponent";
import { RegisterFormComponent } from "../RegisterForm";

interface ContainerProps {
  display?: string;
  flexdirection?: string;
  justifycontent?: string;
  alignitems?: string;
  width?: string;
  height?: string;
  fontsize?: string;
}

export const RegisterPageRightColumnContainer: React.FC<ContainerProps> = ({
  ...props
}) => {
  const theme = useTheme();
  return (
    <StyledRegisterRightColumnContainer {...props}>
      <StyledGroup
        marginbottom_mobile="26px"
        width="100%"
        alignitems="flex-start"
        marginbottom="40px"
        gap="35px">
        <LogoComponent width="186px" height="80%" />
        <StyledText color={theme.colors.blue} fontsize={theme.fontSizes.title}>
          Cadastro
        </StyledText>
      </StyledGroup>
      <RegisterFormComponent />
    </StyledRegisterRightColumnContainer>
  );
};
