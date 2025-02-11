
import NavigationBar from "@/components/NavigationBar";
import Greeting from "@/components/Greeting";
import Header from "@/components/Header";
import DashPropCardBlack from "@/components/DashPropCardBlack";
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
          <div className="flex flex-col gap-6">
            <Greeting />
            <DashRecentTrans />
          </div>
          <DashPropCardBlack
            propertyName="Eagle Dr"
            currentBudget={22950}
            totalBudget={40000}
            isActive={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
