import { ButtonComponent } from "../../components/Buttons";
import { StyledImage } from "../../components/DashboardRightColumn/style";
import {
  StyledCol,
  StyledContainer,
  StyledRow,
  StyledSpan,
  StyledTitle,
  TitleWrapper,
} from "./style";
import profilePicture from "../../images/svg/profilePicture.svg";
import arrowDown from "../../images/svg/arrow down (Stroke).svg";
import { useTheme } from "styled-components";
import backButton from "../../images/svg/back.svg";
import { useNavigate } from "react-router-dom";
import { DetalhesNaoConformidadeCard } from "../../components/DetalhesNaoConformidadeCard";
import { useContext, useEffect, useState } from "react";
import { OccurrenceContext } from "../../context/occurrencesContext";
import { AnalysisComponent } from "../../components/AnalysisComponent";
import { CorrectiveActionsComponent } from "../../components/CorrectiveActionsComponent";
import backButtonMobile from "../../images/svg/back_button_mobile.svg";

export const DetailsPageLayout: React.FC = () => {
  const [screenLarge, setScreenLarge] = useState(window.innerWidth > 992);

  const theme = useTheme();
  const { occurrence } = useContext(OccurrenceContext);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenLarge(window.innerWidth > 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyledContainer
      fluid
      className="px-4 d-flex flex-column justify-center details-container"
      margin_left="-20px"
      // background_color="aquamarine"
      height="100%"
      max_width="80rem">
      <TitleWrapper
        display="flex"
        flex_direction="row"
        justify_content="space-between"
        margin_top="3%"
        align_items="center"
        margin_bottom="3rem"
        marginbottom_mobile="1rem">
        <StyledSpan className="d-flex" gap="20px">
          {screenLarge ? (
            <img
              src={backButton}
              alt="botão de voltar"
              onClick={() => goBack()}
            />
          ) : (
            <img
              src={backButtonMobile}
              alt="botão de voltar"
              onClick={() => goBack()}
            />
          )}

          <StyledTitle
            display="flex"
            align_self="center"
            className="dashboard_title"
            color={theme.colors.blue}>
            Detalhes da não conformidade
          </StyledTitle>
        </StyledSpan>
        {screenLarge && (
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
        )}
      </TitleWrapper>

      <StyledRow>
        {/* Primeira Coluna */}
        <StyledCol
          lg={6}
          xl={6}
          className="mb-sm-3 mb-md-4 mb-lg-0 mb-3 detalhes-nao-conformidade">
          {/* <h1>Primeira Coluna</h1> */}
          <DetalhesNaoConformidadeCard occurrence={occurrence!} />
        </StyledCol>

        {/* Segunda Coluna */}
        <StyledCol lg={6} xl={6}>
          <StyledRow
            className="mb-sm-2 mb-md-2 mb-lg-0 mb-2"
            height="50%"
            // background_color="bisque
          >
            <StyledCol md={12}>
              <AnalysisComponent />
            </StyledCol>
          </StyledRow>

          {/* Linha Inferior */}
          <StyledRow height="50%" className="mb-sm-4 mb-md-4 mb-lg-0 mb-4">
            <StyledCol md={12}>
              <CorrectiveActionsComponent />
            </StyledCol>
          </StyledRow>
        </StyledCol>
      </StyledRow>
    </StyledContainer>
  );
};
