import styled from "styled-components";
import { Form, FormGroup } from "react-bootstrap";
import {
  FormProps,
  PasswordIconToggleProps,
  StyledInputGroupProps,
  StyledInputsWrapperProps,
} from "./types";

export const StyledRegisterForm = styled(Form)<FormProps>`
  width: ${(props) => (props.width ? props.width : "100%")};
`;

export const StyledInputsWrapper = styled.div<StyledInputsWrapperProps>`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifycontent};
  margin-bottom: ${(props) => props.marginbottom};
`;

export const StyledInputGroup = styled(FormGroup)<StyledInputGroupProps>`
  width: ${(props) => props.width};
`;

export const PasswordIconToggle = styled.button<PasswordIconToggleProps>`
  position: ${(props) => (props.position ? props.position : "absolute")};
  right: ${(props) => (props.right ? props.right : "0")};
  border: ${(props) => (props.border ? props.border : "none")};
  background: ${(props) => props.background || "transparent"};
  cursor: ${(props) => props.cursor || "pointer"};
  bottom: ${(props) => props.bottom || "0"};
`;
