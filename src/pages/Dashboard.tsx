
import NavigationBar from "@/components/NavigationBar";
import Greeting from "@/components/Greeting";
import Header from "@/components/Header";
import DashPropCardBlack from "@/components/DashPropCardBlack";
import DashPropCardWhite from "@/components/DashPropCardWhite";
import DashRecentTrans from "@/components/DashRecentTrans";
import { useIsMobile } from "@/hooks/use-mobile";

const Dashboard = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen">
      <NavigationBar />
      <div className="p-6 sm:pl-32 relative z-10">
        {!isMobile && (
          <div className="mt-6">
            <Header />
          </div>
        )}
        <div className="mt-6 sm:mt-10 flex items-start gap-4">
          <div className="flex flex-col gap-[60px]">
            <Greeting />
            <DashRecentTrans />
          </div>
          <div className="flex flex-col gap-2">
            <DashPropCardBlack
              propertyName="Eagle Dr"
              currentBudget={22950}
              totalBudget={40000}
              isActive={true}
            />
            <DashPropCardWhite
              propertyName="Highway Ln"
              currentBudget={25110}
              totalBudget={20000}
              isActive={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
