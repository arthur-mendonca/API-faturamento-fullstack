import { Container } from "react-bootstrap";
import logoImg from "../../images/png/Logo startpn 2.png";
import menuIcon from "../../images/png/menu-mobile-icon.png";
import {
  StyledLogo,
  StyledNavbar,
  StyledMenuIcon,
  StyledProfileImage,
  StyledColumn,
  StyledNav,
  StyledNavDropdown,
  TitleWrapper,
  StyledSearchIcon,
  StyledSpan,
  StyledRow,
} from "./style";
import profilePicture from "../../images/svg/profilePicture.svg";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { MobileCardsComponent } from "../../components/mobileCards";
import { useNavigate } from "react-router-dom";

export const MobileLayout = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/search_mobile");
  };

  const { logout } = useContext(UserContext);

  return (
    <Container fluid className="d-lg-none">
      <StyledRow>
        <StyledColumn
          border_radius="0 0 20px 20px"
          border="solid 1px"
          border_color={theme.colors.grayLight}
          // style={{ backgroundColor: "aquamarine" }}
          className="d-flex justify-content-center ">
          <StyledNavbar
            bg="light"
            expand="lg"
            className="d-flex mt-4 "
            width="100%">
            <StyledNav
              className="d-flex flex-row justify-content-between align-items-center"
              style={{ /*backgroundColor: "yellow", */ width: "100%" }}>
              <StyledNavDropdown
                className="no-arrow"
                title={
                  <StyledMenuIcon
                    src={menuIcon}
                    alt="Menu"
                    width={"30px"}
                    height={"23px"}
                  />
                }
                id="basic-nav-dropdown">
                <StyledNavDropdown.Item href="">
                  Não conformidades
                </StyledNavDropdown.Item>
                <StyledNavDropdown.Item href="">Exemplo</StyledNavDropdown.Item>
                <StyledNavDropdown.Item href="">Exemplo</StyledNavDropdown.Item>
                <StyledNavDropdown.Item href="">Exemplo</StyledNavDropdown.Item>
                <StyledNavDropdown.Item href="" onClick={() => logout()}>
                  Sair
                </StyledNavDropdown.Item>
              </StyledNavDropdown>
              <StyledLogo
                src={logoImg}
                alt="logo"
                width="170px"
                height="45px"
              />

              <StyledProfileImage src={profilePicture} />
            </StyledNav>
          </StyledNavbar>
        </StyledColumn>
      </StyledRow>
      <StyledRow className="justify-content-center">
        <StyledColumn
          className="d-flex flex-column"
          max_width="700px"
          height="88vh"
          // style={{ backgroundColor: "aqua" }}
        >
          {/*LINHA INFERIOR */}
          <TitleWrapper
            className="dashboard_title_mobile d-flex justify-content-between mt-4 mb-4 align-items-center"
            width="100%"
            // style={{ backgroundColor: "aqua" }}
          >
            <p> Não conformidades</p>
            <StyledSpan
              border="1px solid"
              border_radius="11px"
              className="p-1"
              border_color={theme.colors.grayLight}>
              <StyledSearchIcon onClick={() => handleNavigate()} />
            </StyledSpan>
          </TitleWrapper>
          <div>
            <MobileCardsComponent searchTermMobile="" />
          </div>
        </StyledColumn>
      </StyledRow>
    </Container>
  );
};
