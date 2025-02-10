
import { Grid2X2, Search, Bell, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";

const NavigationBar = () => {
  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <div className="w-20 h-96 relative">
        <div className="w-20 h-full bg-black/90 backdrop-blur-sm rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl" />
        
        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 top-5 transition-transform duration-300 hover:scale-105">
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center cursor-pointer">
            <span className="text-black text-2xl font-bold font-['Inter']">L</span>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="absolute top-[5.5rem] left-0 w-full flex flex-col items-center space-y-4">
          {/* Search */}
          <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10">
            <Search className="w-5 h-5 text-zinc-400 transition-colors duration-300 hover:text-white" />
          </button>

          {/* Divider */}
          <div className="w-16 h-px bg-zinc-800" />

          {/* Apps Grid */}
          <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10">
            <Grid2X2 className="w-5 h-5 text-zinc-400 transition-colors duration-300 hover:text-white" />
          </button>

          {/* Notifications */}
          <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10">
            <Bell className="w-5 h-5 text-zinc-400 transition-colors duration-300 hover:text-white" />
          </button>

          {/* Settings */}
          <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10">
            <Settings className="w-5 h-5 text-zinc-400 transition-colors duration-300 hover:text-white" />
          </button>
        </div>

        {/* User Profile - Bottom */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
          <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10">
            <User className="w-5 h-5 text-zinc-400 transition-colors duration-300 hover:text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
