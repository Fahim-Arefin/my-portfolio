import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Education() {
  return (
    <div
      id="education"
      className="container mx-auto mt-12 py-4 font-inter mb-[1000px] "
    >
      <div className="flex flex-col w-[50%] mx-auto space-y-6">
        <div className="flex space-x-4 items-center">
          <div className="text-[#64ffda] text-[16px] md:text-[22px] mt-1">
            02.
          </div>
          <div className="text-[#b4bfde] text-[28px] font-bold">
            Where I’ve Studied
          </div>
          <div className="h-[1px] w-[300px] bg-[#7d87a4]"></div>
        </div>
        <div className="navlink grid grid-cols-9 gap-x-6 w-full text-[14px]">
          <div className="col-span-2">
            <NavLink
              to="/education/graduation"
              className="block border-l-2 border-[#7d87a4] text-[#808aa7] hover:text-[#64ffda] px-5 py-3 hover:bg-[rgb(20,35,64)] hover:cursor-pointer
            transition-all duration-200"
            >
              CS Graduation
            </NavLink>

            <NavLink
              to="/education/higher"
              className="block border-l-2 border-[#7d87a4] text-[#808aa7] hover:text-[#64ffda] px-5 py-3 hover:bg-[rgb(20,35,64)] hover:cursor-pointer
            transition-all duration-200"
            >
              Higher Study
            </NavLink>

            <NavLink
              to="/education/primary"
              className="block border-l-2 border-[#7d87a4] text-[#808aa7] hover:text-[#64ffda] px-5 py-3 hover:bg-[rgb(20,35,64)] hover:cursor-pointer
            transition-all duration-200"
            >
              Primary Study
            </NavLink>
          </div>
          <div className="col-span-7 p-4 ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
