import Button from "../../components/Buttons";
import { useTheme } from "styled-components";

export const LoginPage: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <h1>Login page</h1>
      <Button
        name={"Nome do Botão"}
        background={theme.colors.blue}
        color={theme.colors.white}
        hoverBackground={theme.colors.black}
      />
    </>
  );
};
