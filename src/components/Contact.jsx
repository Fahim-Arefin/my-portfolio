function Contact() {
  return (
    <div id="contact" className="container mx-auto mt-36 py-4 pb-[100px] ">
      <div className="text-center text-[#64ffda] font-Roboto space-y-5">
        <div className="flex space-x-2 justify-center items-center">
          <div className=" text-sm ">04.</div>
          <div className=" text-sm font-bold">What’s Next?</div>
        </div>
        <div className="text-5xl font-inter font-semibold text-[#b4bfde]">
          Get In Touch
        </div>
        <div className="text-lg text-[#6b7793] w-full md:w-[80%] lg:w-[50%] xl:w-[40%] mx-auto font-inter">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </div>
      </div>
      <div className="text-center mt-8 md:mt-16">
        <button
          className="px-8 py-4 border border-[#64ffda] rounded-sm 
              transform hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300
              ease-in-out cursor-pointer hover:shadow-md hover:shadow-[#64ffda] font-mono text-sm text-[#64ffda]"
        >
          Say Hello
        </button>
      </div>
    </div>
  );
}

export default Contact;
