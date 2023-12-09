import { DashboardMenuComponent } from "../../components/DashboardMenu";
import { TwoColumnDashboardLayout } from "../../layouts/DashboardLayout";
import { DetailsPageLayout } from "../../layouts/DetailsPageLayout";

export const DetailsPage: React.FC = () => {
  return (
    <>
      <TwoColumnDashboardLayout
        leftContent={<DashboardMenuComponent />}
        rightContent={<DetailsPageLayout />}
      />
    </>
  );
};
