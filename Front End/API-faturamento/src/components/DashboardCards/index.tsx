import {
  CardsProps,
  CustomCardBody,
  CustomCardImg,
  CustomCardText,
  DashboardCardsContainer,
  SpanWrapper,
  StyledCardsHeader,
} from "./style";
import upDownArros from "../../images/svg/arrows_up_down.svg";
import { useTheme } from "styled-components";

export const DashboardCardComponents: React.FC<CardsProps> = ({ ...props }) => {
  const theme = useTheme();

  return (
    <DashboardCardsContainer {...props} height="100%">
      <StyledCardsHeader color={theme.colors.gray}>
        <CustomCardBody display="flex" flex_direction="row">
          <SpanWrapper margin_right="34%" margin_left="2%">
            <CustomCardText>Nome</CustomCardText>
          </SpanWrapper>
          <SpanWrapper margin_right="20%">
            <CustomCardText>Origem</CustomCardText>
          </SpanWrapper>
          <SpanWrapper
            margin_right="12%"
            display="flex"
            flex_direction="row"
            gap="5px">
            <CustomCardText>Data</CustomCardText>
            <CustomCardImg src={upDownArros} />
          </SpanWrapper>
          <SpanWrapper display="flex" flex_direction="row" gap="5px">
            <CustomCardText>Status</CustomCardText>
            <CustomCardImg src={upDownArros} />
          </SpanWrapper>
        </CustomCardBody>
      </StyledCardsHeader>
    </DashboardCardsContainer>
  );
};
