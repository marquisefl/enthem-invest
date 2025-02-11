
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
    <div className="h-screen w-full overflow-hidden">
      <NavigationBar />
      <div className="h-full p-4 sm:p-4 sm:pl-32 relative z-10 w-full max-w-[100vw] box-border">
        {!isMobile && (
          <div className="h-[48px] flex items-center">
            <Header />
          </div>
        )}
        <div className="h-[calc(100%-48px)] w-full">
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
            <div className="h-full flex flex-col gap-4 w-full box-border">
              {/* First Row */}
              <div className="grid grid-cols-12 gap-6 w-full h-[60%] items-stretch box-border">
                {/* Left Column - Greeting & Transactions */}
                <div className="col-span-4 flex flex-col box-border">
                  <div className="flex-none">
                    <Greeting />
                  </div>
                  <div className="flex-1 overflow-hidden mt-4">
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
              <div className="h-[40%] w-full">
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
