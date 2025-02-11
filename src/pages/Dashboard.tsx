
import NavigationBar from "@/components/NavigationBar";
import Greeting from "@/components/Greeting";
import Header from "@/components/Header";
import DashPropCards from "@/components/DashPropCards";
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
              <DashPropCards />
              <div className="w-full">
                <CatSpendCard />
              </div>
              <div className="w-full">
                <DashRecentTrans />
              </div>
            </div>
          ) : (
            // Desktop Layout - Responsive Grid
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 w-full">
              {/* Left Column - Greeting & Transactions */}
              <div className="md:col-span-1 flex flex-col gap-6 h-full">
                <div className="bg-white rounded-[20px] p-5">
                  <Greeting />
                </div>
                <div className="flex-1">
                  <DashRecentTrans />
                </div>
              </div>

              {/* Middle Column - Property Cards */}
              <div className="md:col-span-1 h-full">
                <DashPropCards />
              </div>

              {/* Right Column - Spending Overview */}
              <div className="md:col-span-2 lg:col-span-1 h-full">
                <CatSpendCard />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
