
import { Calendar, User, ChevronDown } from "lucide-react";
import { format } from "date-fns";

const Header = () => {
  const currentDate = format(new Date(), "EEEE, MMMM d");

  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
      <div className="flex items-center gap-2">
        <Calendar className="w-4 h-4 text-[#333333]" />
        <span className="text-sm text-[#333333] font-medium">
          {currentDate}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shadow-sm">
          <User className="w-4 h-4 text-white" />
        </div>
        <span className="text-sm text-[#333333] font-medium">
          Marquise Tan
        </span>
        <ChevronDown className="w-4 h-4 text-[#333333] cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
