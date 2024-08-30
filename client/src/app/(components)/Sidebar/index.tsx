import { Menu } from "lucide-react";


const Sidebar = () => {
  return(
    <div>
      {/* top logo */}
    <div  className="flex gap-4 justify-between md:justify-normal items-center pt-8"  >
      <div className="">logo</div>
      <h1 className="font-extrabold  text-2xl">Stock</h1>
    
    <button className="md:hidden px-3 py-3 bg-gray-300 rounded-full hover:bg-blue-200" 
    onClick={() => {}}>
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
