
import NavigationBar from "@/components/NavigationBar";
import Greeting from "@/components/Greeting";
import Header from "@/components/Header";
import DashPropCardBlack from "@/components/DashPropCardBlack";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
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
          <Greeting />
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

export default Index;
