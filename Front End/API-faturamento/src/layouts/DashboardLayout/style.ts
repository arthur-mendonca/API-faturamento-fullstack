import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayoutProps } from "./types";

export const StyledContainer = styled(Container)<DashboardLayoutProps>`
  padding-right: ${(props) => props.padding_right};
  padding-left: ${(props) => props.padding_left};
`;

export const StyledRow = styled(Row)<DashboardLayoutProps>`
  margin-right: ${(props) => props.margin_right};
  margin-left: ${(props) => props.margin_left};
`;

export const StyledColLeft = styled(Col)<DashboardLayoutProps>`
  padding-right: ${(props) => props.padding_right};
  padding-left: ${(props) => props.padding_left};

  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
`;

export const StyledColRight = styled(Col)<DashboardLayoutProps>`
  padding-right: ${(props) => props.padding_right};
  padding-left: ${(props) => props.padding_left};

  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
`;
