import { Form } from "react-bootstrap";
import styled from "styled-components";

interface StyledFormTextProps {
  fontweigth?: string;
  fontsize?: string;
  marginleft?: string;
  marginbottom?: string;
  margintop?: string;
  color?: string;
  margin_bottom_mobile?: string;
}

export const StyledFormText = styled(Form.Text)<StyledFormTextProps>`
  font-weight: ${(props) => props.fontweigth};
  font-size: ${(props) => props.fontsize};
  margin-left: ${(props) => props.marginleft};
  margin-bottom: ${(props) => props.marginbottom};
  margin-top: ${(props) => props.margintop};
  color: ${(props) => props.color};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-bottom: ${(props) => props.margin_bottom_mobile};
  }
`;
