import styled from "styled-components";
import { DetailsProps } from "./types";
import { Card } from "react-bootstrap";
import { StyleProps } from "../../utils/types";
import { StatusWrapper } from "../DashboardCards/style";

export const StyledImg = styled.img<DetailsProps>`
  margin-left: ${(props) => props.margin_left};
`;

export const StyledCard = styled(Card)<StyleProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-height: ${(props) => props.max_height};
`;

export const StyledSpan = styled.span<StyleProps>`
  max-height: ${(props) => props.max_heigth};
  overflow-y: ${(props) => props.overflowY};
  overflow-x: ${(props) => props.overflowX};
  width: ${(props) => props.width};
`;

export const StyledStatusWrapper = styled(StatusWrapper)<StyleProps>`
  font-size: ${(props) =>
    props.status === "Em investigação" ? "12px" : props.fontsize};

  @media (max-width: 1180px) {
    width: 40%;
  }
`;
