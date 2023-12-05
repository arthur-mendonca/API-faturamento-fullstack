import { RegisterPageRightColumnContainer } from "../../components/RegisterPageRightColumn";
import { FrontPageImageComponent } from "../../components/frontPageImage";
import { TwoColumnLayout } from "../../layouts/TwoColumnLayout/TwoColumnLayout";

export const RegisterPage: React.FC = () => {
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
          <RegisterPageRightColumnContainer
            display="flex"
            justifycontent=""
            height="100%"
            width="90%"
          />
        }
      />
    </>
  );
};
