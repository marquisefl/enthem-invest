
import NavigationBar from "@/components/NavigationBar";
import Greeting from "@/components/Greeting";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <div className="p-6 sm:p-8">
        <div className="mt-6">
          <Header />
        </div>
        <div className="mt-10">
          <Greeting />
        </div>
      </div>
    </div>
  );
};

export default Index;
