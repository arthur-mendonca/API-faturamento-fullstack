import styled from "styled-components";
import { DetailsProps } from "./types";

export const StyledImg = styled.img<DetailsProps>`
  margin-left: ${(props) => props.margin_left};
`;
