import React from "react";
import { StyledButton } from "./style";

interface ButtonProps {
  name: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  background?: string;
  color?: string;
  hoverBackground?: string;
  padding?: string;
  height?: string;
  boxshadow?: string;
  fontsize?: string;
  className?: string;
}

export const ButtonComponent: React.FC<ButtonProps> = ({
  name,
  className,
  ...props
}) => {
  return (
    <StyledButton {...props} className={className}>
      {name}
    </StyledButton>
  );
};
