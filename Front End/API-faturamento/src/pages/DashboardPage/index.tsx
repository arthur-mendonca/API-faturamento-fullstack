import { DashboardMenuComponent } from "../../components/DashboardMenu";
import { DashboardRightColumn } from "../../components/DashboardRightColumn";
import { TwoColumnDashboardLayout } from "../../layouts/DashboardLayout";

export const DashboardPage: React.FC = () => {
  return (
    <TwoColumnDashboardLayout
      leftContent={<DashboardMenuComponent />}
      rightContent={<DashboardRightColumn />}></TwoColumnDashboardLayout>
  );
};
