import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const modalRef = useRef(null);

  const handleApplyButton = () => {
    modalRef.current.showModal();
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    modalRef.current.close();

    toast.success("Thanx for Sending Email!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
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
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </div>
        </div>
        <div className="text-center mt-8 md:mt-16">
          <button
            onClick={handleApplyButton}
            className="px-8 py-4 border border-[#64ffda] rounded-sm 
              transform hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300
              ease-in-out cursor-pointer hover:shadow-md hover:shadow-[#64ffda] font-mono text-sm text-[#64ffda]"
          >
            Say Hello
          </button>
        </div>
      </div>

      {/* modal */}
      {/* modal */}
      <dialog ref={modalRef} id="my_modal_3" className="modal ">
        <div className="modal-box bg-[#112240] text-[#64ffdb]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={() => modalRef.current.close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-xl mb-2 text-center">
            Contact With me
          </h3>
          <div className="w-full max-w-md mx-auto ">
            <form
              onSubmit={handleSubmitForm}
              className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-[#112240] text-[#64ffdb]"
            >
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2 "
                  htmlFor="email "
                >
                  Email:
                </label>
                <input
                  className=" shadow  border rounded w-full py-2 px-3
                  text-black leading-tight focus:outline-none focus:shadow-outline
                     disabled:bg-gray-200"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="resume"
                >
                  Message
                </label>
                {/* text-area */}
                <textarea
                  required
                  className="textarea textarea-bordered h-24 w-full text-black"
                  placeholder="message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  className="px-5 py-2 border border-[#64ffda] rounded-md 
              transform hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300
              ease-in-out cursor-pointer hover:shadow-md hover:shadow-[#64ffda]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Contact;
