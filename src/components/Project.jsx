import ProjectViewer from "./ProjectViewer";

function Project() {
  const data = [
    {
      id: 1,
      name: "Metro Shelter",
      description:
        "Website offers user, agent, and admin dashboards. Users buy properties, agents add listings, and admins manage both. An integrated map system ensures accuracy, and Stripe enables secure transactions for an enhanced user experience.",
      live: "https://metroshelter-7a7d6.web.app/",
      githubClientRepo:
        "https://github.com/Fahim-Arefin/MetroShelter-Client-Side",
      githubServerRepo:
        "https://github.com/Fahim-Arefin/MetroShelter-Server-Side",
      imgName: "/img2.png",
      order: "left",
      blend: "mix-blend-overlay",
      link: "https://res.cloudinary.com/dshiwsbap/image/upload/v1702407125/img2_psocig.png",
    },
    {
      id: 2,
      name: "Job Zen",
      description:
        "Revolutionize job searching with a secure portal featuring JWT authentication, Cloudinary-powered file uploads, and Brevo email integration. Users effortlessly manage postings, apply, and receive application updates, ensuring a seamless and secure job-seeking experience.",
      live: "https://jobzen-45cf0.web.app/",
      githubClientRepo: "https://github.com/Fahim-Arefin/JobZen-client-side",
      githubServerRepo: "https://github.com/Fahim-Arefin/JobZen-server-side",
      imgName: "/img3.png",
      order: "right",
      blend: "mix-blend-multiply",
      link: "https://res.cloudinary.com/dshiwsbap/image/upload/v1702413385/img3_ixinmw.png",
    },
  ];

  return (
    <div
      id="project"
      className="container mx-auto mt-44 py-4 font-inter mb-[1000px]"
    >
      <div className="w-[95%] mx-4 md:w-[80%] lg:w-[65%] md:mx-auto space-y-12 ">
        {/* Heading */}
        <div className="flex space-x-4 items-center">
          <div className="text-[#64ffda] text-[16px] md:text-[22px] mt-1">
            03.
          </div>
          <div className="text-[#b4bfde] text-[22px] md:text-[28px] font-bold ">
            Some Things I’ve Built
          </div>
          <div className="h-[1px] w-[100px] md:w-[200px] lg:w-[300px] bg-[#7d87a4]"></div>
        </div>
        {/* Image and description
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="col-span-1 order-first">
            <ImageWithBlendAndOverlay
              img="/img2.png"
              className="w-full xl:w-[580px] xl:h-[360px] "
            />
          </div>
          <div className="col-span-1 order-last text-center xl:text-right my-10 z-50 space-y-5">
            <div>
              <h1 className="text-[#64ffda] font-Roboto text-sm">
                Featured Project
              </h1>
              <h1 className="font-inter text-2xl font-semibold text-[#b4bfde]">
                Metro Shelter
              </h1>
            </div>
            <div className="bg-[#112240] p-5 text-sm text-[#a8b2d1] rounded-sm font-inter">
              Website offers user, agent, and admin dashboards. Users buy
              properties, agents add listings, and admins manage both. An
              integrated map system ensures accuracy, and Stripe enables secure
              transactions for an enhanced user experience.
            </div>
            <div className="flex justify-center xl:justify-end text-[#a8b2d1] space-x-3 text-xs flex-wrap xl:pl-12 font-Roboto">
              <span>React</span>
              <span>Express</span>
              <span>Mongoose</span>
              <span>JWT</span>
              <span>Firebase</span>
              <span>Tanstack Query</span>
            </div>
            <div className="flex justify-center xl:justify-end text-[#a8b2d1] space-x-3">
              <div className="w-5 h-5 cursor-pointer">
                <a
                  href="https://github.com/Fahim-Arefin/MetroShelter-Client-Side"
                  target="_blank"
                  rel="noreferrer"
                >
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
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
              <div className="w-5 h-5 cursor-pointer">
                <a href="https://metroshelter-7a7d6.web.app/">
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
        </div> */}

        <div className="space-y-12">
          {data.map((item) => (
            <ProjectViewer key={item.id} item={item} />
          ))}
        </div>

        {/* <ProjectViewer
          imgName="/img2.png"
          order="left"
          blend="mix-blend-overlay"
          link="https://res.cloudinary.com/dshiwsbap/image/upload/v1702407125/img2_psocig.png"
          data={data}
        />
        <ProjectViewer
          imgName="/img3.png"
          order="right"
          blend="mix-blend-multiply"
          link="https://res.cloudinary.com/dshiwsbap/image/upload/v1702413385/img3_ixinmw.png"
          data={data}
        /> */}
      </div>
    </div>
  );
}

export default Project;
