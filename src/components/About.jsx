function About() {
  return (
    <div
      id="about"
      className=" container mx-auto mt-12 md:mt-96 py-4 font-inter"
    >
      <div className="flex flex-col lg:flex-row justify-center md:space-x-24 py-6 text-[#7d87a4]">
        <div className="space-y-8 mx-4 md:mx-24 lg:mx-0">
          <div className="flex items-center space-x-4 ">
            <div className="text-[#64ffda] text-[16px] md:text-[22px] mt-1">
              01.
            </div>
            <div className="text-[#b4bfde] text-[20px] md:text-[28px] font-bold">
              About Me
            </div>
            <div className="h-[1px] w-[200px] md:w-[300px] bg-[#7d87a4]"></div>
          </div>
          <div className="mt-24 w-full md:w-[500px] space-y-4 text-sm md:text-[16px]">
            <p>
              Hello! I am <span className="text-[#64ffda]">Fahim</span>, and I
              love creating things on the internet effortlessly. My journey into
              web development started in 2021 when I decided to clone a website,
              and surprisingly, it effortlessly taught me a lot about HTML and
              CSS! Subsequently, I effortlessly took a few web development
              courses on <span className="text-[#64ffda]">Udemy</span> and
              effortlessly mastered the{" "}
              <span className="text-[#64ffda]">MERN stack.</span>
            </p>
            <p>
              Fast-forward to today, I possess the ability to effortlessly build
              and deploy complete websites using MERN technology. Currently, my
              primary <span className="text-[#64ffda]">focus</span> is on
              learning <span className="text-[#64ffda]">Next.js</span>, as it
              serves as the next logical step for every MERN developer. Excited
              about the continuous evolution of web development, I am eager to
              explore new technologies and enhance my skills.
            </p>
            <p>
              Currently, I am actively{" "}
              <span className="text-[#64ffda]">seeking opportunities </span> to
              kickstart my professional career as a web developer and embark on
              a journey of growth and self-improvement.
            </p>
            <p>Here are a few technologies I have learnt recently:</p>
            <ul className="list-disc grid grid-cols-2 ml-5">
              <li className="text-[#64ffda] col-span-1">JavaScript (ES6+)</li>
              <li className="text-[#64ffda] col-span-1">React.js</li>
              <li className="text-[#64ffda] col-span-1">Tailwind CSS</li>
              <li className="text-[#64ffda] col-span-1">Express.js</li>
              <li className="text-[#64ffda] col-span-1">Git </li>
              <li className="text-[#64ffda] col-span-1">Node.js</li>
              <li className="text-[#64ffda] col-span-1">Mongodb</li>
              <li className="text-[#64ffda] col-span-1">Mongoose (ODM)</li>
            </ul>
          </div>
        </div>
        {/* img */}
        <div className="mt-24 mx-12 group md:w-[300px] h-[300px] ">
          <div
            className="relative w-full md:w-[300px] h-[300px] rounded-sm z-20 group-hover:-translate-x-[2px] group-hover:-translate-y-[2px]
          transition-all duration-150"
          >
            <img
              className=" w-full h-full rounded-sm"
              src="/pic2.png"
              alt="img"
            />
            <div
              className="mix-blend-darken hover:opacity-0 absolute z-30 inset-0 bg-[#64ffda] opacity-80 rounded-sm 
            transition-all duration-150"
            ></div>
          </div>
          <div
            className="invisible md:visible relative z-10 -top-[280px] left-4 w-[300px] h-[300px] border-2 border-[#64ffda] rounded-md
          group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all duration-150"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default About;
