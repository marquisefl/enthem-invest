
import { Search, Grid2X2, Home, FileText, Book, Bell, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const NavigationBar = () => {
  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <div className="w-[88px] h-[976px] relative">
        <div className="w-[88px] h-[976px] left-0 top-0 absolute bg-black rounded-[28px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.05)]" />
        
        {/* Logo */}
        <div className="h-10 left-[24px] top-[20px] absolute justify-start items-center gap-3 inline-flex">
          <div className="w-10 h-10 relative cursor-pointer transition-transform duration-300 hover:scale-105">
            <div className="w-10 h-10 left-0 top-0 absolute bg-[#2cff3a] rounded-full" />
            <div className="w-3.5 h-[38px] left-[13px] top-[1px] absolute text-center text-black text-[28px] font-bold font-['Poppins']">Ë</div>
          </div>
        </div>

        {/* Search */}
        <div className="w-10 h-10 left-[24px] top-[112px] absolute">
          <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10">
            <Search className="w-6 h-6 text-[#838383] transition-colors duration-300 hover:text-white" />
          </button>
        </div>

        {/* Divider */}
        <div className="w-16 h-[0px] left-[12px] top-[172px] absolute border border-[#838383]" />

        {/* Grid */}
        <div className="w-10 h-10 left-[24px] top-[216px] absolute">
          <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 relative">
            <Grid2X2 className="w-6 h-6 text-white transition-colors duration-300 hover:text-white" />
            <div className="w-1 h-1 absolute -right-1 top-1/2 bg-[#2cff3a] rounded-full" />
          </button>
        </div>

        {/* Home */}
        <div className="w-10 h-10 left-[24px] top-[296px] absolute">
          <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10">
            <Home className="w-6 h-6 text-white transition-colors duration-300 hover:text-white" />
          </button>
        </div>

        {/* File */}
        <div className="w-10 h-10 left-[24px] top-[376px] absolute">
          <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10">
            <FileText className="w-6 h-6 text-white transition-colors duration-300 hover:text-white" />
          </button>
        </div>

        {/* Book */}
        <div className="w-10 h-10 left-[24px] top-[456px] absolute">
          <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10">
            <Book className="w-6 h-6 text-white transition-colors duration-300 hover:text-white" />
          </button>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-8 left-0 w-full space-y-4">
          {/* Bell */}
          <div className="w-10 h-10 mx-auto">
            <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 relative">
              <Bell className="w-6 h-6 text-white transition-colors duration-300 hover:text-white" />
              <div className="w-1 h-1 absolute -right-1 top-1 bg-[#2cff3a] rounded-full" />
            </button>
          </div>

          {/* Settings */}
          <div className="w-10 h-10 mx-auto">
            <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10">
              <Settings className="w-6 h-6 text-white transition-colors duration-300 hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
