
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
            // Desktop Layout - Responsive Grid
            <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-6 w-full">
              {/* Left Column - Greeting & Transactions */}
              <div className="md:col-span-1 lg:col-span-4 h-full">
                <div className="flex flex-col justify-between items-start gap-[72px] h-full">
                  <div className="flex-none">
                    <Greeting />
                  </div>
                  <div className="flex-1 w-full">
                    <DashRecentTrans />
                  </div>
                  <div className="w-full">
                    <DealAnalyzer />
                  </div>
                </div>
              </div>

              {/* Middle Column - Property Cards */}
              <div className="md:col-span-1 lg:col-span-3">
                <DashPropCards />
              </div>

              {/* Right Column - Spending Overview */}
              <div className="md:col-span-2 lg:col-span-5">
                <div className="h-[calc(100%_-_1px)]">
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
