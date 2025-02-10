
import { useMemo } from "react";

const Greeting = ({ userName = "Marquise" }: { userName?: string }) => {
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 17) return "Good afternoon";
    if (hour >= 17 && hour < 22) return "Good evening";
    return "Good night";
  }, []);

  return (
    <div className="w-[370px] h-[88px] flex flex-col justify-center items-start">
      <span className="text-[#a6a6a6] text-3xl font-medium font-['Poppins']">
        {greeting},
      </span>
      <span className="text-[#3f3f3f] text-3xl font-medium font-['Poppins']">
        {userName}
      </span>
    </div>
  );
};

export default Greeting;
