import { LoginFormComponent } from "../LoginForm";
import { LogoComponent } from "../LogoComponent";
import { StyledGroup, StyledRightColumnContainer, StyledText } from "./style";
import { useTheme } from "styled-components";

interface ContainerProps {
  display?: string;
  flexdirection?: string;
  justifycontent?: string;
  alignitems?: string;
  width?: string;
  height?: string;
  fontsize?: string;
}

export const LoginPageRightColumnContainer: React.FC<ContainerProps> = ({
  ...props
}) => {
  const theme = useTheme();

  return (
    <StyledRightColumnContainer {...props}>
      <StyledGroup
        width="100%"
        alignitems="flex-start"
        marginbottom="50px"
        gap="35px">
        <LogoComponent width="186px" height="80%" />
        <StyledText color={theme.colors.blue} fontsize={theme.fontSizes.title}>
          Dados de acesso
        </StyledText>
      </StyledGroup>
      <LoginFormComponent />
    </StyledRightColumnContainer>
  );
};
