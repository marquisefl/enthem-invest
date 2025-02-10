
import NavigationBar from "@/components/NavigationBar";
import Greeting from "@/components/Greeting";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <div className="p-6">
        <Greeting />
      </div>
    </div>
  );
};

export default Index;
