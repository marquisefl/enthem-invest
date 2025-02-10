
import NavigationBar from "@/components/NavigationBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black">
      <NavigationBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mt-20">Welcome to Your App</h1>
      </div>
    </div>
  );
};

export default Index;
