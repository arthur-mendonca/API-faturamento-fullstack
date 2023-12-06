import { useTheme } from "styled-components";
import { StyledDashboardRightColumn } from "./style";

interface ColumnProps {
  background_color?: string;
  height?: string;
}

export const DashboardRightColumn: React.FC<ColumnProps> = ({ ...props }) => {
  const theme = useTheme();
  return (
    <StyledDashboardRightColumn
      {...props}
      height="100vh"
      background_color={theme.colors.grayMedium}></StyledDashboardRightColumn>
  );
};
