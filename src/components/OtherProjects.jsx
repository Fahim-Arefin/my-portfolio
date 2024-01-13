import ProjectCard from "./ProjectCard";

function OtherProjects() {
  const data = [
    {
      id: 1,
      name: "The Atomic Blog",
      description:
        "Atomic Blog is a user-friendly web-based blogging platform, offering post creation, search, and dark mode. Primarily demonstrating React optimization, it initially had performance issues, resolved through memoization techniques like caching with 'memo,' 'useMemo,' and 'useCallback' hooks, ensuring a responsive experience.",
      live: "https://atomic-blog-web.netlify.app/",
      githubClientRepo: "https://github.com/Fahim-Arefin/atomic-blog",
      technology: ["React", "Tailwind CSS", "Memoization"],
    },

    {
      id: 2,
      name: "World Wise",
      description:
        "WorldWise, a web-based platform, enables users to document details about recently visited cities on a global map. With an interactive map for precise location selection, users can create entries with visitation dates and manage their list of visited cities, including the option to remove entries.",
      live: "https://world-wise-application.netlify.app/",
      githubClientRepo: "https://github.com/Fahim-Arefin/worldwise-client-side",
      githubServerRepo: "https://github.com/Fahim-Arefin/worldwise-server-side",
      technology: ["React", "Tailwind CSS", "Mongoose", "Express"],
    },
    {
      id: 3,
      name: "UsePopcorn",
      description:
        "Explore UsePopcorn, a movie-centric web app for searching, viewing details, rating, and managing your watchlist. Boasting local storage integration and a responsive design, UsePopcorn simplifies the process of discovering and organizing your favorite films.",
      live: "https://magnificent-speculoos-65fc3a.netlify.app/",
      githubClientRepo: "https://github.com/Fahim-Arefin/usePopcorn",
      technology: ["React", "Tailwind CSS", "Rest API", "UseEffect"],
    },
    {
      id: 4,
      name: "React Quiz",
      description:
        "Welcome to the Quiz App, a React-based quiz application that offers an engaging way to test your knowledge and compete for high scores within a time limit. This app features a sleek design and various functionalities to enhance your quiz-taking experience.",
      live: "https://react-quiz-system.netlify.app/",
      githubClientRepo: "https://github.com/Fahim-Arefin/react-quiz",
      technology: ["React", "useReducer", "Rest API", "Tailwind CSS"],
    },
  ];

  return (
    <div className="container mx-auto mt-44 py-4 font-inter">
      <div className="w-[95%] mx-4 md:w-[80%] lg:w-[70%] md:mx-auto space-y-12 ">
        {/* heading */}
        <div className="text-center">
          <h1 className="text-[#ccd6f6] font-inter font-semibold text-[32px]">
            Other Noteworthy Projects
          </h1>
          <span className="text-[#64ffdb] text-[14px] font-Roboto">
            view the project
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {data.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OtherProjects;
