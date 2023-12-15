import { Form } from "react-bootstrap";
import styled from "styled-components";

interface ErrorTextProps {
  fontweigth?: string;
  fontsize?: string;
  marginleft?: string;
  marginbottom?: string;
  margintop?: string;
  color?: string;
  display?: string;
}

export const StyledErrorText = styled(Form.Text)<ErrorTextProps>`
  font-weight: ${(props) => props.fontweigth};
  font-size: ${(props) => props.fontsize || "10px"};
  margin-left: ${(props) => props.marginleft};
  margin-bottom: ${(props) => props.marginbottom};
  margin-top: ${(props) => props.margintop};
  color: ${(props) => props.color || props.theme.colors.red};
  display: ${(props) => props.display || "block"};
`;
