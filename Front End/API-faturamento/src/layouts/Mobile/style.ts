import styled from "styled-components";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { StyleProps } from "../../utils/types";
import { IoSearch } from "react-icons/io5";

export const StyledContainer = styled(Container)``;

export const StyledRow = styled(Row)<StyleProps>``;

export const StyledColumn = styled(Col)<StyleProps>`
  border-radius: ${(props) => props.border_radius};
  border: ${(props) => props.border};
  border-color: ${(props) => props.border_color};
  height: ${(props) => props.height};
  max-width: ${(props) => props.max_width};
`;

export const StyledNav = styled(Nav)<StyleProps>``;

export const StyledNavDropdown = styled(NavDropdown)<StyleProps>`
  .dropdown-toggle::after {
    display: none !important;
  }
`;

export const StyledProfileImage = styled(Image)<StyleProps>``;

export const StyledLogo = styled(Image)<StyleProps>`
  @media (max-width: 590px) {
    width: 120px;
    height: 33px;
  }
`;

export const StyledMenuIcon = styled(Image)<StyleProps>`
  @media (max-width: 590px) {
    width: 20px;
    height: 20px;
  }
`;

export const StyledNavbar = styled(Navbar)<StyleProps>`
  width: ${(props) => props.width};
`;

export const TitleWrapper = styled.div<StyleProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flex_direction};
  justify-content: ${(props) => props.justify_content};
  margin-top: ${(props) => props.margin_top};
  align-items: ${(props) => props.align_items};
  margin-bottom: ${(props) => props.margin_bottom};
  width: ${(props) => props.width};
`;

export const StyledSearchIcon = styled(IoSearch)<StyleProps>`
  cursor: pointer;
`;

export const StyledSpan = styled.span<StyleProps>`
  border-radius: ${(props) => props.border_radius};
  border: ${(props) => props.border};
  border-color: ${(props) => props.border_color};
`;
