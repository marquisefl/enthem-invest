
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
    <div className="h-screen flex flex-col overflow-hidden">
      <NavigationBar />
      <div className={`flex-1 p-6 sm:pl-32 relative z-10 ${isMobile ? 'overflow-y-auto pb-24' : ''}`}>
        {!isMobile && (
          <div className="mt-6">
            <Header />
          </div>
        )}
        <div className="mt-6 sm:mt-10">
          {isMobile ? (
            // Mobile Layout
            <div className="flex flex-col gap-4 h-[calc(100vh-180px)]">
              <Greeting />
              <div className="flex-1 overflow-y-auto space-y-4 pb-20">
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
                <DashRecentTrans />
              </div>
            </div>
          ) : (
            // Desktop Layout
            <div className="flex items-start gap-4">
              <div className="flex flex-col gap-[64px]">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
