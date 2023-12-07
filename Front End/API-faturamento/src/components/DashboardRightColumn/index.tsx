import { useTheme } from "styled-components";
import { InnerDataWrapper, StyledDashboardRightColumn } from "./style";

interface ColumnProps {
  background_color?: string;
  height?: string;
}

export const DashboardRightColumn: React.FC<ColumnProps> = ({ ...props }) => {
  const theme = useTheme();
  return (
    <StyledDashboardRightColumn
      {...props}
      // padding_left="20px"
      margin_left="-20px"
      height="100vh"
      background_color={theme.colors.grayMedium}
      z_index="0"
      position="relative"
      display="flex"
      justify_content="center">
      <InnerDataWrapper
        width="420px"
        background_color="aqua"
        height="420px"></InnerDataWrapper>
    </StyledDashboardRightColumn>
  );
};
