import { StyledLogo } from "./style";
import img from "../../images/png/Logo startpn 2.png";

interface LogoProps {
  width?: string;
  height?: string;
}

export const LogoComponent: React.FC<LogoProps> = ({ ...props }) => {
  return (
    <>
      <StyledLogo {...props} src={img} alt="logo" />
    </>
  );
};
