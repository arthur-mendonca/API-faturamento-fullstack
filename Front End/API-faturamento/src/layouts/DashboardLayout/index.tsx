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
    <>
      <StyledContainer fluid padding_left="0" padding_right="0">
        <StyledRow margin_left="0" margin_right="0">
          <StyledColLeft
            height="100vh"
            width="20%"
            padding_left="0"
            padding_right="0">
            {leftContent}
          </StyledColLeft>
          <StyledColRight
            height="100vh"
            width="calc(100% - 20%)"
            padding_left="0"
            padding_right="0">
            {rightContent}
          </StyledColRight>
        </StyledRow>
      </StyledContainer>
    </>
  );
};
