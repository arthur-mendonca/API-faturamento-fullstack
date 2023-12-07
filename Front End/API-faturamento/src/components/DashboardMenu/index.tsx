import { useTheme } from "styled-components";
import {
  InnerIconsWrapper,
  StyledIconsWrapper,
  StyledImage,
  StyledMenuContainer,
} from "./style";
import logo from "../../images/png/Logo startpn 2.png";
import gear from "../../images/svg/setting-2.svg";
import taskSquare from "../../images/svg/task-square.svg";
import exclamation from "../../images/svg/exclamacao.svg";
import exitIcon from "../../images/svg/Log out.svg";
import messageIcon from "../../images/svg/message.svg";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

interface MenuProps {
  background_color?: string;
  height?: string;
}

export const DashboardMenuComponent: React.FC<MenuProps> = ({ ...props }) => {
  const theme = useTheme();

  const { logout } = useContext(UserContext);

  const handleLogout = () => {
    return logout();
  };

  return (
    <StyledMenuContainer
      {...props}
      justify_content="flex-start"
      height="100vh"
      padding="0 10px"
      display="flex"
      align_items="flex-start"
      flex_direction="column"
      background_color={theme.colors.white}
      border_radius="0 17px 17px 0"
      z_index="100"
      position="relative"
      border_color={theme.colors.grayLighter}
      border="solid 2px">
      <StyledIconsWrapper display="flex" flex_direction="column" gap="20px">
        <StyledImage
          width="170px"
          src={logo}
          alt="Logo da empresa"
          margin_bottom="20px"
          align_self="self-end"
          margin_top="40px"
          margin_left="7px"
        />

        <InnerIconsWrapper
          display="flex"
          background_color={theme.colors.background}
          padding="5px"
          border_radius="8px"
          gap="11px"
          max-width="120%"
          flex_direction="row"
          justify_content="left"
          align_items="center">
          <StyledImage
            width="12%"
            src={exclamation}
            color={theme.colors.blue}
            alt="ícone de exclamação"
          />
          <p className="menu_text_selected menu_text ">Não conformidades</p>
        </InnerIconsWrapper>

        <InnerIconsWrapper
          display="flex"
          gap="10px"
          padding="5px"
          flex_direction="row"
          justify_content="left"
          align_items="center">
          <StyledImage
            width="14%"
            src={taskSquare}
            alt="ícone de menu tarefas"
          />
          <p className="menu_text menu_text_common">Exemplo</p>
        </InnerIconsWrapper>

        <InnerIconsWrapper
          display="flex"
          flex_direction="row"
          padding="5px"
          justify_content="left"
          align_items="center"
          gap="10px">
          <StyledImage width="14%" src={messageIcon} alt="ícone de mensagens" />
          <p className="menu_text menu_text_common">Exemplo</p>
        </InnerIconsWrapper>

        <InnerIconsWrapper
          display="flex"
          gap="10px"
          padding="5px"
          flex_direction="row"
          justify_content="left"
          align_items="center">
          <StyledImage
            width="14%"
            src={gear}
            alt="ícone de menu configurações"
          />
          <p className="menu_text menu_text_common">Exemplo</p>
        </InnerIconsWrapper>
      </StyledIconsWrapper>
      <StyledIconsWrapper>
        <InnerIconsWrapper
          display="flex"
          position="relative"
          top="700%"
          gap="10px"
          padding="5px"
          flex_direction="row"
          onClick={() => {
            handleLogout();
          }}>
          <StyledImage
            src={exitIcon}
            position="relative"
            top="700%"
            margin_right="10px"
          />
          <p className="menu_text menu_text_common">Sair</p>
        </InnerIconsWrapper>
      </StyledIconsWrapper>
    </StyledMenuContainer>
  );
};
