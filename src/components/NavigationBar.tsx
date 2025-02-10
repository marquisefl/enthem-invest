
import { Search, Grid2X2, Home, FileText, Book, Bell, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
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
          <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 group">
            <Search className="w-6 h-6 text-[#9CA3AF] transition-colors duration-300 group-hover:text-white" />
          </button>
        </div>

        {/* Divider */}
        <div className="mx-3 mb-6 border-t border-[#374151]" />

        {/* Main Navigation */}
        <div className="space-y-8 px-6">
          {/* Grid */}
          <Link to="/dashboard" className="relative block">
            <button className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 ${isActive('/dashboard') ? 'bg-white/10' : ''}`}>
              <Grid2X2 className={`w-6 h-6 transition-colors duration-300 ${isActive('/dashboard') ? 'text-white' : 'text-[#9CA3AF] hover:text-white'}`} />
            </button>
            {isActive('/dashboard') && (
              <div className="w-1 h-1 absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#2cff3a] rounded-full" />
            )}
          </Link>

          {/* Home */}
          <Link to="/" className="relative block">
            <button className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 ${isActive('/') ? 'bg-white/10' : ''}`}>
              <Home className={`w-6 h-6 transition-colors duration-300 ${isActive('/') ? 'text-white' : 'text-[#9CA3AF] hover:text-white'}`} />
            </button>
            {isActive('/') && (
              <div className="w-1 h-1 absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#2cff3a] rounded-full" />
            )}
          </Link>

          {/* File */}
          <Link to="/documents" className="relative block">
            <button className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 ${isActive('/documents') ? 'bg-white/10' : ''}`}>
              <FileText className={`w-6 h-6 transition-colors duration-300 ${isActive('/documents') ? 'text-white' : 'text-[#9CA3AF] hover:text-white'}`} />
            </button>
            {isActive('/documents') && (
              <div className="w-1 h-1 absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#2cff3a] rounded-full" />
            )}
          </Link>

          {/* Book */}
          <Link to="/resources" className="relative block">
            <button className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 ${isActive('/resources') ? 'bg-white/10' : ''}`}>
              <Book className={`w-6 h-6 transition-colors duration-300 ${isActive('/resources') ? 'text-white' : 'text-[#9CA3AF] hover:text-white'}`} />
            </button>
            {isActive('/resources') && (
              <div className="w-1 h-1 absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#2cff3a] rounded-full" />
            )}
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-5 left-0 w-full space-y-4 px-6">
          {/* Bell */}
          <Link to="/notifications" className="relative block">
            <button className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 ${isActive('/notifications') ? 'bg-white/10' : ''}`}>
              <Bell className={`w-6 h-6 transition-colors duration-300 ${isActive('/notifications') ? 'text-white' : 'text-[#9CA3AF] hover:text-white'}`} />
            </button>
            {isActive('/notifications') && (
              <div className="w-1 h-1 absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#2cff3a] rounded-full" />
            )}
          </Link>

          {/* Settings */}
          <Link to="/settings" className="relative block">
            <button className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 ${isActive('/settings') ? 'bg-white/10' : ''}`}>
              <Settings className={`w-6 h-6 transition-colors duration-300 ${isActive('/settings') ? 'text-white' : 'text-[#9CA3AF] hover:text-white'}`} />
            </button>
            {isActive('/settings') && (
              <div className="w-1 h-1 absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#2cff3a] rounded-full" />
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
