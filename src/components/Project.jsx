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
    <div id="project" className="container mx-auto mt-44 py-4 font-inter">
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

        <div className="space-y-12">
          {data.map((item) => (
            <ProjectViewer key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
