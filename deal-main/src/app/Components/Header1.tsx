import React from "react";
import { ChevronLeft } from "lucide-react";

export default function Header1() {
  return (
    <div className="flex items-center justify-between px-6 py-4 w-full bg-white border-b border-gray-200 shadow-sm">
      {/* Left Section */}
      <div className="flex items-center space-x-8">
        <button>
          <ChevronLeft size={20} />
        </button>

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-6 text-sm font-medium text-gray-500">
          <span className="text-black">Deal Overview</span>
          <span className="hover:text-black cursor-pointer">Workshop</span>
          <span className="hover:text-black cursor-pointer">Pipeline</span>
          <span className="hover:text-black cursor-pointer">Settings</span>
        </div>
      </div>

      {/* Center Section - Avatar + Search */}
      <div className="flex items-center space-x-3">
        <img
          src="/Avatar Image.png"
          alt="User Avatar"
          className="w-8 h-8 object-cover rounded-full"
        />
        <div className="flex items-center space-x-2 bg-white border border-gray-300 px-4 py-2 w-[240px] rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-none">
          <input
            type="text"
            placeholder="Ask me anything!"
            className="bg-transparent outline-none text-sm w-full placeholder-gray-500"
          />
        </div>
      </div>

      {/* Right Section - Underwriting Model */}
      <div className="flex items-center space-x-3">
        <img
          src="/24a55148-6c38-40de-a51e-9fcf59c0e5e8.png"
          alt="Starboard Logo"
          className="w-[74px] h-[46px] object-contain"
        />
        {/* <div className="text-right">
          <div className="text-xs font-semibold">Underwriting Model</div>
          <select className="mt-1 text-xs bg-gray-100 px-2 py-1 rounded focus:outline-none">
            <option>Industrial.Template.v2.4.xlsx</option>
          </select>
        </div> */}
      </div>
    </div>
  );
}
