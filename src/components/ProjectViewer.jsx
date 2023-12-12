import ImageWithBlendAndOverlay from "./ImageWithBlendAndOverlay";

// img name , order = Left / right
function ProjectViewer({ item }) {
  return (
    <div>
      {/* Image and description */}
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div
          className={`${
            item.order === "left" ? "item.order-first" : "order-last xl:-ml-20"
          } col-span-1 `}
        >
          <ImageWithBlendAndOverlay
            img={item.imgName}
            blend={item.blend}
            link={item.link}
            className="w-full xl:w-[580px] xl:h-[360px] "
          />
        </div>
        <div
          className={`${
            item.order === "left"
              ? "order-last xl:text-right "
              : "order-first xl:text-left "
          } col-span-1 z-50  text-center  my-10 space-y-5`}
        >
          <div>
            <h1 className="text-[#64ffda] font-Roboto text-sm">
              Featured Project
            </h1>
            <h1 className="font-inter text-2xl font-semibold text-[#b4bfde]">
              {item.name}
            </h1>
          </div>
          <div className="bg-[#112240] p-5 text-sm text-[#a8b2d1] rounded-sm font-inter">
            {item.description}
          </div>
          <div
            className={`${
              item.order === "left"
                ? "xl:justify-end xl:pl-12"
                : "xl:justify-start xl:pr-12"
            } flex justify-center  text-[#a8b2d1] space-x-3 text-xs flex-wrap  font-Roboto`}
          >
            <span>React</span>
            <span>Express</span>
            <span>Mongoose</span>
            <span>JWT</span>
            <span>Firebase</span>
            <span>Tanstack Query</span>
          </div>
          <div
            className={`${
              item.order === "left" ? "xl:justify-end" : "xl:justify-start"
            } flex justify-center text-[#a8b2d1] space-x-3`}
          >
            <div className="w-5 h-5 cursor-pointer">
              <a href={item.githubClientRepo} target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github hover:text-[#64ffda] transition-all duration-150"
                >
                  <title>GitHub Client</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
            <div className="w-5 h-5 cursor-pointer">
              <a href={item.githubServerRepo} target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github hover:text-[#64ffda] transition-all duration-150"
                >
                  <title>GitHub Server</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
            <div className="w-5 h-5 cursor-pointer">
              <a href={item.live} target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link hover:text-[#64ffda] transition-all duration-150"
                >
                  <title>Live Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectViewer;
