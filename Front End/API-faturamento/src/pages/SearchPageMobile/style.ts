import { IoSearch } from "react-icons/io5";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { StyleProps } from "../../utils/types";

export const StyledContainer = styled(Container)<StyleProps>``;

export const StyledSearchIcon = styled(IoSearch)<StyleProps>`
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  position: ${(props) => props.position};
  size: ${(props) => props.size};

  @media (max-width: 490px) {
    left: 10%;
  }
`;

export const StyledSearchWrapper = styled.span<StyleProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flex_direction};
  align-items: ${(props) => props.align_items};
  justify-content: ${(props) => props.justify_content};
`;

export const StyledImg = styled.img<StyleProps>`
  cursor: pointer;
`;
