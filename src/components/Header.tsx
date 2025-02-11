
import { Calendar, User, ChevronDown } from "lucide-react";
import { format } from "date-fns";

const Header = () => {
  const currentDate = format(new Date(), "EEEE, MMMM d");

  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
      <div className="flex items-center gap-2">
        <Calendar className="w-5 h-5 text-[#333333]" />
        <span className="text-base sm:text-lg text-[#333333] font-medium">
          {currentDate}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shadow-sm">
          <User className="w-5 h-5 text-white" />
        </div>
        <span className="text-base sm:text-lg text-[#333333] font-medium">
          Marquise Tan
        </span>
        <ChevronDown className="w-5 h-5 text-[#333333] cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
