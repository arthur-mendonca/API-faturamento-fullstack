import React from "react";
import { StyledButton } from "./style";

interface ButtonProps {
  name?: string;
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
  children?: React.ReactNode;
  display?: string;
  flex_direction?: string;
  align_items?: string;
  border?: string;
  gap?: string;
  width?: string;
}

export const ButtonComponent: React.FC<ButtonProps> = ({
  name,
  className,
  children,
  ...props
}) => {
  return (
    <StyledButton {...props} className={className}>
      {name} {children}
    </StyledButton>
  );
};
