import resume from "/upload/Resume.pdf";

function Banner() {
  return (
    <div className="container mx-auto mt-12 md:mt-44 py-4">
      <div className="px-4 md:px-24 lg:px-32 xl:px-72 space-y-4 md:space-y-7">
        <p className="tracking-wide text-[#64ffda] text-[16px] font-Roboto">
          Hi, my name is
        </p>
        <div className="space-y-2 md:space-y-4">
          <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-[#b4bfde] font-inter">
            Minhajul Arefin Fahim
          </p>
          <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-[#8892b0] font-inter">
            I build things for the web.
          </p>
        </div>
        <p className="text-[#7b86a3] text-sm md:text-[15px] lg:text-[16px] md:w-[70%] lg:w-[65%] font-inter leading-6 lg:leading-7">
          Dedicated and reliable web enthusiast eager to launch my career as a
          <span className="text-[#64ffda]"> MERN stack</span> developer. Quick
          thinker, logical, and a team player ready to contribute effectively.
          Excited for continuous learning and professional growth.
        </p>
        <div>
          <a href={resume} download="Resume.pdf">
            <button
              className="px-8 py-4 border border-[#64ffda] rounded-sm 
              transform hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300
              ease-in-out cursor-pointer hover:shadow-md hover:shadow-[#64ffda] font-mono text-sm text-[#64ffda]"
            >
              Check Out My Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
