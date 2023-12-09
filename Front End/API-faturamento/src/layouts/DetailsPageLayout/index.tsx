import { ButtonComponent } from "../../components/Buttons";
import {
  StyledImage,
  TitleWrapper,
} from "../../components/DashboardRightColumn/style";
import { StyledCol, StyledContainer, StyledRow, StyledSpan } from "./style";
import profilePicture from "../../images/svg/profilePicture.svg";
import arrowDown from "../../images/svg/arrow down (Stroke).svg";
import { useTheme } from "styled-components";
import backButton from "../../images/svg/back.svg";
import { useNavigate } from "react-router-dom";
import { DetalhesNaoConformidadeCard } from "../../components/EvidenceDetalhesNaoConformidade";
import { useContext } from "react";
import { OccurrenceContext } from "../../context/occurrencesContext";
import { AnalysisComponent } from "../../components/AnalysisComponent";
import { CorrectiveActionsComponent } from "../../components/CorrectiveActionsComponent";

export const DetailsPageLayout: React.FC = () => {
  const { occurrence } = useContext(OccurrenceContext);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const theme = useTheme();
  return (
    <StyledContainer
      fluid
      className="px-4"
      margin_left="-20px"
      // background_color="aquamarine"
    >
      <TitleWrapper
        display="flex"
        flex_direction="row"
        justify_content="space-between"
        margin_top="3%"
        align_items="center"
        margin_bottom="3rem">
        <StyledSpan className="d-flex" gap="20px">
          <img
            src={backButton}
            alt="botão de voltar"
            onClick={() => goBack()}
          />
          <h1 className="dashboard_title" color={theme.colors.blue}>
            Detalhes da não conformidade
          </h1>
        </StyledSpan>
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

      <StyledRow>
        {/* Primeira Coluna */}
        <StyledCol lg={6} xl={6}>
          {/* <h1>Primeira Coluna</h1> */}
          <DetalhesNaoConformidadeCard occurrence={occurrence!} />
        </StyledCol>

        {/* Segunda Coluna */}
        <StyledCol lg={6} xl={6}>
          <StyledRow
            height="50%"
            // background_color="bisque
          >
            <StyledCol md={12}>
              <AnalysisComponent />
            </StyledCol>
          </StyledRow>

          {/* Linha Inferior */}
          <StyledRow height="50%">
            <StyledCol md={12}>
              {" "}
              <CorrectiveActionsComponent />
            </StyledCol>
          </StyledRow>
        </StyledCol>
      </StyledRow>
    </StyledContainer>
  );
};
