import { useTheme } from "styled-components";
import {
  InnerDataWrapper,
  InnerSearchbarWrapper,
  SearchBarWrapper,
  StyledDashboardRightColumn,
  StyledImage,
  StyledSearchIcon,
  TitleWrapper,
} from "./style";
import { ButtonComponent } from "../Buttons";
import arrowDown from "../../images/svg/arrow down (Stroke).svg";
import profilePicture from "../../images/svg/profilePicture.svg";
import { InputFormComponent } from "../FormComponents/Input";
import { DashboardCardComponents } from "../DashboardCards";
import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";

interface ColumnProps {
  background_color?: string;
  height?: string;
}

export const DashboardRightColumn: React.FC<ColumnProps> = ({ ...props }) => {
  const { openModal } = useContext(ModalContext);

  const handleShowModal = () => {
    console.log("open modal");
    openModal("createOccurrence");
  };
  const theme = useTheme();
  return (
    <StyledDashboardRightColumn
      {...props}
      margin_left="-10px"
      height="100vh"
      background_color={theme.colors.background}
      z_index="0"
      position="relative"
      display="flex"
      justify_content="center"
      max_width="80rem">
      <InnerDataWrapper
        margin_right="-20px"
        width="93%"
        height="100vh"
        display="flex"
        flex_direction="column"
        gap="60px">
        <TitleWrapper
          display="flex"
          flex_direction="row"
          justify_content="space-between"
          margin_top="3%"
          align_items="center">
          <h1 className="dashboard_title" color={theme.colors.blue}>
            Não conformidades
          </h1>
          <ButtonComponent
            className="profile_button_text"
            padding="24px 10px"
            display="flex"
            flex_direction="row"
            align_items="center"
            gap="10px"
            background={theme.colors.background}
            border="solid 1px var(--gray-light)">
            <StyledImage src={profilePicture} />
            <p>Mateus Barbosa</p>
            <StyledImage src={arrowDown} />
          </ButtonComponent>
        </TitleWrapper>
        <SearchBarWrapper
          display="flex"
          justify_content="space-between"
          margin_left="-17px">
          <InnerSearchbarWrapper
            display="flex"
            flex_direction="row"
            align_items="center">
            <StyledSearchIcon
              left="13%"
              top="1%"
              position="relative"
              size={20}
              color={theme.colors.blue}
            />
            <InputFormComponent
              width="100%"
              borderradius="60px"
              placeholder="Pesquisar"
              padding="25px 48px "
            />
          </InnerSearchbarWrapper>
          <ButtonComponent
            background={theme.colors.blue}
            width="180px"
            onClick={() => handleShowModal()}>
            <p className="text_menu_button">Nova ocorrência</p>
          </ButtonComponent>
        </SearchBarWrapper>
        <DashboardCardComponents />
      </InnerDataWrapper>
    </StyledDashboardRightColumn>
  );
};
