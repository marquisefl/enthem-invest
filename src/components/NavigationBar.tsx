
import { Search, Grid2X2, Home, FileText, Book, Bell, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const NavigationBar = () => {
  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <div className="w-[88px] h-auto max-h-[90vh] relative bg-black rounded-[28px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.05)] py-5">
        {/* Logo */}
        <div className="px-6 mb-8">
          <div className="w-10 h-10 relative cursor-pointer transition-transform duration-300 hover:scale-105">
            <div className="w-10 h-10 left-0 top-0 absolute bg-[#2cff3a] rounded-full" />
            <div className="w-3.5 h-[38px] left-[13px] top-[1px] absolute text-center text-black text-[28px] font-bold font-['Poppins']">Ë</div>
          </div>
        </div>

        {/* Search */}
        <div className="px-6 mb-4">
          <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10">
            <Search className="w-6 h-6 text-[#838383] transition-colors duration-300 hover:text-white" />
          </button>
        </div>

        {/* Divider */}
        <div className="mx-3 mb-4 border-t border-[#838383]" />

        {/* Main Navigation */}
        <div className="space-y-4 px-6">
          {/* Grid */}
          <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 relative">
            <Grid2X2 className="w-6 h-6 text-white transition-colors duration-300 hover:text-white" />
            <div className="w-1 h-1 absolute -right-1 top-1/2 bg-[#2cff3a] rounded-full" />
          </button>

          {/* Home */}
          <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10">
            <Home className="w-6 h-6 text-white transition-colors duration-300 hover:text-white" />
          </button>

          {/* File */}
          <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10">
            <FileText className="w-6 h-6 text-white transition-colors duration-300 hover:text-white" />
          </button>

          {/* Book */}
          <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10">
            <Book className="w-6 h-6 text-white transition-colors duration-300 hover:text-white" />
          </button>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-5 left-0 w-full space-y-4 px-6">
          {/* Bell */}
          <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 relative">
            <Bell className="w-6 h-6 text-white transition-colors duration-300 hover:text-white" />
            <div className="w-1 h-1 absolute -right-1 top-1 bg-[#2cff3a] rounded-full" />
          </button>

          {/* Settings */}
          <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10">
            <Settings className="w-6 h-6 text-white transition-colors duration-300 hover:text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
