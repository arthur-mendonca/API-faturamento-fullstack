import { useEffect, useState } from "react";
import { DashboardMenuComponent } from "../../components/DashboardMenu";
import { DashboardRightColumn } from "../../components/DashboardRightColumn";
import { TwoColumnDashboardLayout } from "../../layouts/DashboardLayout";
import { MobileLayout } from "../../layouts/Mobile";

export const DashboardPage: React.FC = () => {
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
      {screenMobile ? (
        <TwoColumnDashboardLayout
          leftContent={<DashboardMenuComponent />}
          rightContent={<DashboardRightColumn />}></TwoColumnDashboardLayout>
      ) : (
        <MobileLayout />
      )}
    </>
  );
};
