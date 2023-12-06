import React, { ReactNode } from "react";
import {
  StyledColLeft,
  StyledColRight,
  StyledContainer,
  StyledRow,
} from "./style";

interface LayoutProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

export const TwoColumnDashboardLayout: React.FC<LayoutProps> = ({
  leftContent,
  rightContent,
}) => {
  return (
    <StyledContainer fluid padding_left="0" padding_right="0">
      <StyledRow margin_left="0" margin_right="0">
        <StyledColLeft md={3} height="100vh" padding_left="0" padding_right="0">
          {leftContent}
        </StyledColLeft>
        <StyledColRight
          md={9}
          height="100vh"
          padding_left="0"
          padding_right="0">
          {rightContent}
        </StyledColRight>
      </StyledRow>
    </StyledContainer>
  );
};
