import { useState } from "react";
import { InputFormComponent } from "../../components/FormComponents/Input";
import { MobileCardsComponent } from "../../components/mobileCards";
import {
  StyledContainer,
  StyledSearchIcon,
  StyledSearchWrapper,
  StyledImg,
} from "./style";
import { useTheme } from "styled-components";
import backButtonMobile from "../../images/png/back_button_search_page.png";
import { useNavigate } from "react-router-dom";

export const SearchPageMobile: React.FC = () => {
  const [searchTermMobile, setSearchTermMobile] = useState("");
  const theme = useTheme();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <StyledContainer>
      <StyledSearchWrapper
        display="flex"
        flex_direction="row"
        align_items="center">
        <StyledImg
          src={backButtonMobile}
          alt="back button"
          onClick={() => handleGoBack()}
        />
        <StyledSearchIcon
          left="6%"
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
          value={searchTermMobile}
          className="mb-4 mt-4"
          onChange={(e) => setSearchTermMobile(e.target.value)}
        />
      </StyledSearchWrapper>
      <MobileCardsComponent searchTermMobile={searchTermMobile} />
    </StyledContainer>
  );
};
