function Footer() {
  return (
    <div className="container mx-auto font-Roboto pb-4">
      <aside className="flex space-x-3 justify-center items-center">
        <svg
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 84 96"
          className="w-6 transform hover:translate-x-[-8px] hover:translate-y-[-2px] transition-transform duration-300 ease-in-out cursor-pointer"
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
              <text
                x="47%"
                y="60%"
                fontFamily="Arial, sans-serif"
                fontSize="40"
                fill="#64ffda"
                stroke="none"
                textAnchor="middle"
              >
                M
              </text>
            </g>
          </g>
        </svg>
        <p className="text-sm text-[#a8b2d1]">
          Copyright © 2023 - All right reserved
        </p>
      </aside>
    </div>
  );
}

export default Footer;
