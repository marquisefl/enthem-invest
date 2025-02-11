
import NavigationBar from "@/components/NavigationBar";
import Greeting from "@/components/Greeting";
import Header from "@/components/Header";
import DashPropCardBlack from "@/components/DashPropCardBlack";
import DashPropCardWhite from "@/components/DashPropCardWhite";
import DashRecentTrans from "@/components/DashRecentTrans";
import CatSpendCard from "@/components/CatSpendCard";
import { useIsMobile } from "@/hooks/use-mobile";

const Dashboard = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen w-full">
      <NavigationBar />
      <div className="p-4 sm:p-6 sm:pl-32 relative z-10 w-full max-w-[100vw]">
        {!isMobile && (
          <div className="mt-6">
            <Header />
          </div>
        )}
        <div className="mt-6 sm:mt-10 w-full">
          {isMobile ? (
            // Mobile Layout
            <div className="flex flex-col gap-4 w-full">
              <Greeting />
              <div className="w-full">
                <DashPropCardBlack
                  propertyName="Eagle Dr"
                  currentBudget={22950}
                  totalBudget={40000}
                  isActive={true}
                />
              </div>
              <div className="w-full">
                <DashPropCardWhite
                  propertyName="Highway Ln"
                  currentBudget={25110}
                  totalBudget={20000}
                  isActive={true}
                />
              </div>
              <div className="w-full">
                <CatSpendCard />
              </div>
              <div className="w-full">
                <DashRecentTrans />
              </div>
            </div>
          ) : (
            // Desktop Layout - Fluid Grid
            <div className="flex flex-col gap-6 w-full">
              <Greeting />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
                <div className="md:col-span-1">
                  <DashPropCardBlack
                    propertyName="Eagle Dr"
                    currentBudget={22950}
                    totalBudget={40000}
                    isActive={true}
                  />
                </div>
                <div className="md:col-span-1">
                  <DashPropCardWhite
                    propertyName="Highway Ln"
                    currentBudget={25110}
                    totalBudget={20000}
                    isActive={true}
                  />
                </div>
                <div className="md:col-span-1">
                  <DashRecentTrans />
                </div>
                <div className="md:col-span-2 lg:col-span-3">
                  <CatSpendCard />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
