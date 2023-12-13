import { useEffect, useState } from "react";
import { DashboardMenuComponent } from "../../components/DashboardMenu";
import { TwoColumnDashboardLayout } from "../../layouts/DashboardLayout";
import { DetailsPageLayout } from "../../layouts/DetailsPageLayout";

export const DetailsPage: React.FC = () => {
  const [screenMobile, setScreenMobile] = useState(window.innerWidth > 992);

  useEffect(() => {
    const handleResize = () => {
      setScreenMobile(window.innerWidth > 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <TwoColumnDashboardLayout
        leftContent={screenMobile && <DashboardMenuComponent />}
        rightContent={<DetailsPageLayout />}
      />
    </>
  );
};
