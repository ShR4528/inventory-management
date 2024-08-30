'use client';

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/app/state";
import { Menu } from "lucide-react";


const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  }

  const sidebarClassName = `fixed flex flex-col 
  ${isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64" }
  bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40
  `

  return(
<div className={sidebarClassName}>
      {/* top logo */}
    <div  className={`flex gap-3 justify-between md:justify-normal items-center pt-8
       ${isSidebarCollapsed ? "px-5" : "px-8"}`}>
      <div className="">logo</div>
      <h1 className={`${isSidebarCollapsed ? "hidden" : "block" } font-extrabold text-2xl`}>STOCK</h1>
    
    <button className="md:hidden px-3 py-3 bg-gray-300 rounded-full hover:bg-blue-200" 
    onClick={toggleSidebar}>
      <Menu className="w-4 h-4" />
       
    </button>
    </div>
{/* links */}
    <div className="flex-grow mt-8">
      {/* links here */}
    </div>


    {/* footer */}
    <div>
      <p className="text-center text-xs text-gray-500">&copy; 2024 Shamil</p>
    </div>
    </div>
   
  )
};

export default Sidebar;
