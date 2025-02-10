import { Search, Grid2X2, Building2, MessageSquareQuote, Users, Bell, Settings, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import SearchOverlay from "./SearchOverlay";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const NavigationBar = () => {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMobile = useIsMobile();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  if (isMobile) {
    return (
      <>
        <SearchOverlay 
          isOpen={isSearchOpen} 
          onClose={() => setIsSearchOpen(false)} 
        />
        
        {/* Top Header */}
        <div className="px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/dashboard" className="block">
            <div className="w-10 h-10 relative cursor-pointer">
              <div className="w-10 h-10 left-0 top-0 absolute bg-[#2cff3a] rounded-full" />
              <div className="w-3.5 h-[38px] left-[13px] top-[1px] absolute text-center text-black text-[28px] font-bold font-poppins">Ë</div>
            </div>
          </Link>

          {/* Notifications */}
          <Link to="/notifications">
            <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
              <Bell className="w-5 h-5 text-white" />
            </button>
          </Link>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-6 left-4 right-4 z-50">
          <div className="bg-black rounded-lg py-4 px-6">
            <div className="flex justify-between items-center">
              {/* Dashboard */}
              <Link to="/dashboard" className="flex flex-col items-center">
                <Building2 className={`w-6 h-6 ${isActive('/dashboard') ? 'text-white' : 'text-gray-400'}`} />
                <span className={`text-xs mt-1 ${isActive('/dashboard') ? 'text-white' : 'text-gray-400'}`}>Dash</span>
              </Link>

              {/* Properties */}
              <Link to="/" className="flex flex-col items-center">
                <Building2 className={`w-6 h-6 ${isActive('/') ? 'text-white' : 'text-gray-400'}`} />
                <span className={`text-xs mt-1 ${isActive('/') ? 'text-white' : 'text-gray-400'}`}>Property's</span>
              </Link>

              {/* Quotes */}
              <Link to="/documents" className="flex flex-col items-center">
                <MessageSquareQuote className={`w-6 h-6 ${isActive('/documents') ? 'text-white' : 'text-gray-400'}`} />
                <span className={`text-xs mt-1 ${isActive('/documents') ? 'text-white' : 'text-gray-400'}`}>Quotes</span>
              </Link>

              {/* More */}
              <Link to="/more" className="flex flex-col items-center">
                <Menu className={`w-6 h-6 ${isActive('/more') ? 'text-white' : 'text-gray-400'}`} />
                <span className={`text-xs mt-1 ${isActive('/more') ? 'text-white' : 'text-gray-400'}`}>More</span>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
      
      <nav className="fixed left-4 top-6 bottom-6 z-50">
        <div className="h-full w-[88px] relative bg-black rounded-[28px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.05)] py-5">
          {/* Logo */}
          <Link to="/dashboard" className="block px-6 mb-8">
            <div className="w-10 h-10 relative cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="w-10 h-10 left-0 top-0 absolute bg-[#2cff3a] rounded-full" />
              <div className="w-3.5 h-[38px] left-[13px] top-[1px] absolute text-center text-black text-[28px] font-bold font-poppins">Ë</div>
            </div>
          </Link>

          {/* Search */}
          <div className="px-6 mb-6">
            <Tooltip delayDuration={1000}>
              <TooltipTrigger asChild>
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 group"
                >
                  <Search className="w-6 h-6 text-[#9CA3AF] transition-colors duration-300 group-hover:text-white" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-black text-white border-none">
                <p className="font-inter">Search</p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* Divider */}
          <div className="mx-3 mb-6 border-t border-[#374151]" />

          {/* Main Navigation */}
          <div className="space-y-8 px-6">
            {/* Dashboard (Home) */}
            <Tooltip delayDuration={1000}>
              <TooltipTrigger asChild>
                <Link to="/dashboard" className="relative block">
                  <button className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 ${isActive('/dashboard') ? 'bg-white/10' : ''}`}>
                    <Grid2X2 className={`w-6 h-6 transition-colors duration-300 ${isActive('/dashboard') ? 'text-white' : 'text-[#9CA3AF] hover:text-white'}`} />
                  </button>
                  {isActive('/dashboard') && (
                    <div className="w-1 h-1 absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#2cff3a] rounded-full" />
                  )}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-black text-white border-none">
                <p className="font-inter">Dashboard</p>
              </TooltipContent>
            </Tooltip>

            {/* Properties */}
            <Tooltip delayDuration={1000}>
              <TooltipTrigger asChild>
                <Link to="/" className="relative block">
                  <button className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 ${isActive('/') ? 'bg-white/10' : ''}`}>
                    <Building2 className={`w-6 h-6 transition-colors duration-300 ${isActive('/') ? 'text-white' : 'text-[#9CA3AF] hover:text-white'}`} />
                  </button>
                  {isActive('/') && (
                    <div className="w-1 h-1 absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#2cff3a] rounded-full" />
                  )}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-black text-white border-none">
                <p className="font-inter">Properties</p>
              </TooltipContent>
            </Tooltip>

            {/* Quotes Request */}
            <Tooltip delayDuration={1000}>
              <TooltipTrigger asChild>
                <Link to="/documents" className="relative block">
                  <button className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 ${isActive('/documents') ? 'bg-white/10' : ''}`}>
                    <MessageSquareQuote className={`w-6 h-6 transition-colors duration-300 ${isActive('/documents') ? 'text-white' : 'text-[#9CA3AF] hover:text-white'}`} />
                  </button>
                  {isActive('/documents') && (
                    <div className="w-1 h-1 absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#2cff3a] rounded-full" />
                  )}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-black text-white border-none">
                <p className="font-inter">Quotes Request</p>
              </TooltipContent>
            </Tooltip>

            {/* Contacts */}
            <Tooltip delayDuration={1000}>
              <TooltipTrigger asChild>
                <Link to="/resources" className="relative block">
                  <button className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 ${isActive('/resources') ? 'bg-white/10' : ''}`}>
                    <Users className={`w-6 h-6 transition-colors duration-300 ${isActive('/resources') ? 'text-white' : 'text-[#9CA3AF] hover:text-white'}`} />
                  </button>
                  {isActive('/resources') && (
                    <div className="w-1 h-1 absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#2cff3a] rounded-full" />
                  )}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-black text-white border-none">
                <p className="font-inter">Contacts</p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-5 left-0 w-full space-y-4 px-6">
            {/* Bell */}
            <Tooltip delayDuration={1000}>
              <TooltipTrigger asChild>
                <Link to="/notifications" className="relative block">
                  <button className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 ${isActive('/notifications') ? 'bg-white/10' : ''}`}>
                    <Bell className={`w-6 h-6 transition-colors duration-300 ${isActive('/notifications') ? 'text-white' : 'text-[#9CA3AF] hover:text-white'}`} />
                  </button>
                  {isActive('/notifications') && (
                    <div className="w-1 h-1 absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#2cff3a] rounded-full" />
                  )}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-black text-white border-none">
                <p className="font-inter">Notifications</p>
              </TooltipContent>
            </Tooltip>

            {/* Settings */}
            <Tooltip delayDuration={1000}>
              <TooltipTrigger asChild>
                <Link to="/settings" className="relative block">
                  <button className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 ${isActive('/settings') ? 'bg-white/10' : ''}`}>
                    <Settings className={`w-6 h-6 transition-colors duration-300 ${isActive('/settings') ? 'text-white' : 'text-[#9CA3AF] hover:text-white'}`} />
                  </button>
                  {isActive('/settings') && (
                    <div className="w-1 h-1 absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#2cff3a] rounded-full" />
                  )}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-black text-white border-none">
                <p className="font-inter">Settings</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;

import NavigationBar from "@/components/NavigationBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
    </div>
  );
};

export default Index;
