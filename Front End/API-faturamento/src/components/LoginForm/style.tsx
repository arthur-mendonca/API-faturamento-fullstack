import { Form } from "react-bootstrap";
import styled from "styled-components";
import {
  StyledButtonGroupProps,
  FormProps,
  StyledInputGroupProps,
  PasswordIconToggleProps,
} from "./types";

export const StyledLoginForm = styled(Form)<FormProps>`
  width: ${(props) => (props.width ? props.width : "100%")};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 80%;
  }
`;

export const StyledInputGroup = styled.div<StyledInputGroupProps>`
  position: ${(props) => props.position || "relative"};
  display: ${(props) => props.display || "flex"};
  align-items: ${(props) => props.alignitems || "center"};
`;

export const StyledButtonGroup = styled.div<StyledButtonGroupProps>`
  position: ${(props) => props.position || "relative"};
  display: ${(props) => props.display || "block"};
  justify-content: ${(props) => props.justifycontent || "space-between"};
  align-items: ${(props) => props.alignitems || "center"};
  margin-top: ${(props) => props.margintop || "0"};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column-reverse;
    align-items: normal;
    gap: 58px;
    margin-top: 0;

    a {
      align-self: flex-end;
      margin-top: 20px;
    }
  }
`;

export const PasswordIconToggle = styled.button<PasswordIconToggleProps>`
  position: ${(props) => (props.position ? props.position : "absolute")};
  right: ${(props) => (props.right ? props.right : "0")};
  border: ${(props) => (props.border ? props.border : "none")};
  background: ${(props) => props.background || "transparent"};
  cursor: ${(props) => props.cursor || "pointer"};
`;
