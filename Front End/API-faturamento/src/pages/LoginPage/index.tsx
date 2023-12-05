import { LoginPageRightColumnContainer } from "../../components/LoginPageRightColumn";
import { FrontPageImageComponent } from "../../components/frontPageImage";
import { TwoColumnLayout } from "../../layouts/TwoColumnLayout/TwoColumnLayout";

export const LoginPage: React.FC = () => {
  return (
    <>
      <TwoColumnLayout
        leftContent={
          <FrontPageImageComponent
            height="100vh"
            width="50vw"
            marginbottom="-10px"
          />
        }
        rightContent={
          <LoginPageRightColumnContainer
            display="flex"
            justifycontent=""
            height="100%"
            width="420px"
          />
        }
      />
    </>
  );
};
