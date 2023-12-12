import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <div className="mx-12 font-mono sticky top-4 z-[100]">
      <div className="navbar text-[#64ffda]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 84 96"
            className="w-10 transform hover:translate-x-[-8px] hover:translate-y-[-2px] transition-transform duration-300
             ease-in-out cursor-pointer"
            fill="#0a192f"
          >
            <title>Logo</title>
            <g transform="translate(-8.000000, -2.000000)" className="group">
              <g transform="translate(11.000000, 5.000000)">
                <polygon
                  id="Shape"
                  stroke="#64ffda"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="39 0 0 22 0 67 39 90 78 68 78 23"
                ></polygon>
                <path
                  d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
                  fill="#64ffda"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex space-x-8 items-center text-[13px] px-2">
            <li>
              <Link smooth to={"/#about"} className="space-x-2 tracking-wider">
                <span>01.</span>
                <span className="text-[#b4bfde] hover:text-[#64ffda]">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link
                smooth
                to={"/#education"}
                className="space-x-2 tracking-wider"
              >
                <span>02.</span>
                <span className="text-[#b4bfde] hover:text-[#64ffda]">
                  Education
                </span>
              </Link>
            </li>
            <li>
              <Link
                smooth
                to={"/#project"}
                className="space-x-2 tracking-wider"
              >
                <span>03.</span>
                <span className="text-[#b4bfde] hover:text-[#64ffda]">
                  Project
                </span>
              </Link>
            </li>
            <li>
              <Link
                smooth
                to={"/#contact"}
                className="space-x-2 tracking-wider"
              >
                <span>04.</span>
                <span className="text-[#b4bfde] hover:text-[#64ffda]">
                  Contact
                </span>
              </Link>
            </li>

            <li>
              <a
                href="https://drive.google.com/file/d/1RmADwg1lgqq2GkMwpgGpaUOvhEPRSuEV/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  className="px-5 py-2 border border-[#64ffda] rounded-md 
              transform hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300
              ease-in-out cursor-pointer hover:shadow-md hover:shadow-[#64ffda]"
                >
                  Resume
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
