
import NavigationBar from "@/components/NavigationBar";
import Greeting from "@/components/Greeting";
import Header from "@/components/Header";
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
            <div className="flex flex-col gap-6 w-full">
              {/* First Row */}
              <div className="grid grid-cols-12 gap-6 w-full">
                {/* Left Column - Greeting & Transactions */}
                <div className="col-span-4 h-[432px]">
                  <div className="flex flex-col h-full">
                    <div className="flex-none mb-6">
                      <Greeting />
                    </div>
                    <div className="flex-1">
                      <DashRecentTrans />
                    </div>
                  </div>
                </div>

                {/* Middle Column - Property Cards */}
                <div className="col-span-3 h-[432px]">
                  <DashPropCards />
                </div>

                {/* Right Column - Spending Overview */}
                <div className="col-span-5 h-[432px]">
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
