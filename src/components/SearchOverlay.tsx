
import React from "react";
import { Command, CommandInput } from "@/components/ui/command";
import { X } from "lucide-react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Search Container */}
      <div className="relative top-[20%] mx-auto max-w-2xl px-4">
        <div className="relative bg-white rounded-lg shadow-2xl">
          <Command className="rounded-lg border">
            <div className="flex items-center border-b px-3">
              <CommandInput
                placeholder="Type to search..."
                className="h-14"
                autoFocus
              />
              <button
                onClick={onClose}
                className="ml-2 rounded-md p-2 hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </Command>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
