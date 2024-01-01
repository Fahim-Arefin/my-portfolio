import { NavLink, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Education() {
  const location = useLocation();

  console.log("Location", location);
  return (
    <div id="education" className="container mx-auto mt-12 py-4 font-inter  ">
      <div className="flex flex-col w-[95%] mx-4 md:w-[80%] xl:w-[50%] md:mx-auto space-y-6">
        <div className="flex space-x-4 items-center">
          <div className="text-[#64ffda] text-[16px] md:text-[22px] mt-1">
            02.
          </div>
          <div className="text-[#b4bfde] text-[22px] md:text-[28px] font-bold">
            Where I’ve Studied
          </div>
          <div className="h-[1px] w-[100px] md:w-[200px] lg:w-[300px] bg-[#7d87a4]"></div>
        </div>
        <div className="navlink grid grid-cols-9 gap-x-2 md:gap-x-6 w-full text-[14px]">
          <div className="col-span-3 md:col-span-2">
            <NavLink
              to="/education/graduation"
              className="block border-l-2 border-[#7d87a4] text-[#808aa7] hover:text-[#64ffda] px-5 py-3 hover:bg-[rgb(20,35,64)] hover:cursor-pointer
            transition-all duration-200"
            >
              CSE Graduation
            </NavLink>

            <NavLink
              to="/education/higher"
              className="block border-l-2 border-[#7d87a4] text-[#808aa7] hover:text-[#64ffda] px-5 py-3 hover:bg-[rgb(20,35,64)] hover:cursor-pointer
            transition-all duration-200"
            >
              College Study
            </NavLink>

            <NavLink
              to="/education/primary"
              className="block border-l-2 border-[#7d87a4] text-[#808aa7] hover:text-[#64ffda] px-5 py-3 hover:bg-[rgb(20,35,64)] hover:cursor-pointer
            transition-all duration-200"
            >
              School Study
            </NavLink>
          </div>
          <div className="col-span-6 md:col-span-7 p-4 ">
            {location.pathname === "/" && (
              <div className="h-[100px] text-[#64ffda] flex md:ml-12 items-center">
                <h1>Please select an education to see details</h1>
              </div>
            )}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
