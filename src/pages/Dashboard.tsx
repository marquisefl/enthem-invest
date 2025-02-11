
import NavigationBar from "@/components/NavigationBar";
import Greeting from "@/components/Greeting";
import DashPropCards from "@/components/DashPropCards";
import DashRecentTrans from "@/components/DashRecentTrans";
import CatSpendCard from "@/components/CatSpendCard";
import DealAnalyzer from "@/components/DealAnalyzer";
import { useIsMobile } from "@/hooks/use-mobile";

const Dashboard = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen w-full">
      <NavigationBar />
      <div className="p-4 sm:pt-6 sm:pl-32 relative z-10 w-full max-w-[100vw] box-border">
        <div className="w-full">
          {isMobile ? (
            // Mobile Layout
            <div className="flex flex-col gap-4 w-full">
              <Greeting />
              <DashPropCards />
              <div className="w-full">
                <CatSpendCard />
              </div>
              <div className="w-full">
                <DashRecentTrans />
              </div>
              <div className="w-full">
                <DealAnalyzer />
              </div>
            </div>
          ) : (
            // Desktop Layout - Two Row Grid
            <div className="flex flex-col gap-10 w-full box-border">
              {/* First Row */}
              <div className="grid grid-cols-12 gap-6 w-full h-[432px] items-stretch box-border">
                {/* Left Column - Greeting & Transactions */}
                <div className="col-span-4 flex flex-col box-border">
                  <div className="flex-none">
                    <Greeting />
                  </div>
                  <div className="flex-1 overflow-hidden mt-6">
                    <DashRecentTrans />
                  </div>
                </div>

                {/* Middle Column - Property Cards */}
                <div className="col-span-3">
                  <DashPropCards />
                </div>

                {/* Right Column - Spending Overview */}
                <div className="col-span-5">
                  <CatSpendCard />
                </div>
              </div>

              {/* Second Row */}
              <div className="w-full">
                <DealAnalyzer />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
