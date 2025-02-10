
import NavigationBar from "@/components/NavigationBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mt-20 font-poppins">Welcome to Your App</h1>
        <p className="text-lg text-center mt-4 font-inter">This is some sample body text using Inter font.</p>
      </div>
    </div>
  );
};

export default Index;
