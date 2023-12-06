import { StyledMenuContainer } from "./style";

interface MenuProps {
  background_color?: string;
  height?: string;
}

export const DashboardMenuComponent: React.FC<MenuProps> = ({ ...props }) => {
  return (
    <StyledMenuContainer
      {...props}
      height="100vh"
      background_color="aqua"></StyledMenuContainer>
  );
};
