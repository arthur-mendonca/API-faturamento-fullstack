import styled from "styled-components";

interface ColumnProps {
  background_color?: string;
  height?: string;
}

export const StyledDashboardRightColumn = styled.main<ColumnProps>`
  height: ${(props) => props.height};
  background-color: ${(props) => props.background_color};
`;
