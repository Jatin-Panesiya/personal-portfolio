import CardHeading from "./CardHeading";
import { GoDotFill } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Button } from "@mantine/core";
import { FaSquareGithub } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="container">
      <CardHeading title="Contact" />
      <div className="border my-10 py-6 relative border-btnBg shadow-md shadow-btnBg/40 max-w-[1000px] px-5 mx-auto rounded-xl">
        <img
          src="/contactBg.svg"
          alt="contact design"
          className="absolute hidden 400:block right-0 top-0"
        />
        <span className="flex items-center">
          <img
            src="/profilepic.jpg"
            className="h-10 rounded-full mb-1.5 w-10"
            alt="Jatin"
          />
          <p className="py-2 -mt-2 border shadow-xl rounded-3xl text-xs 375:text-sm border-gray-500 px-3 ms-2 flex items-center gap-1.5">
            <GoDotFill className="text-green-500 " />
            Available for work
          </p>
        </span>
        <div className="grid gap-y-7 750:flex items-center">
          <div className="750:px-7 400:mr-7 750:mr-0 max-w-[490px]">
            <p className="text-lg 375:text-xl py-3">
              Drop me a line or say 👋 on social networks
            </p>
            <p className="text-gray-500 325:text-base text-sm">
              Whether you're a web developer in need of support or an
              early-stage company looking to level up your development, I'd love
              to talk about your project. If you want to develop your website,
              let's collaborate and bring your vision to life 💜
            </p>
          </div>
          <span className="750:mx-4">
            <p className="text-gray-400">jatinpanesiya2003@gmail.com</p>
            <div className="flex text-2xl text-gray-400 gap-3 py-4">
              <a
                href="https://www.linkedin.com/in/jatin-panesiya/"
                target="_blank"
              >
                <FaLinkedin />
              </a>

              <a href="mailto:jatinpanesiya2003@gmail.com" target="_blank">
                <MdEmail />
              </a>
              <a href="https://github.com/Jatin-Panesiya" target="_blank">
                <FaSquareGithub />
              </a>
            </div>
            <Button className="bg-btnBg text-black hover:bg-btnBg/90 text-sm 375:text-base font-semibold">
              <a href="mailto:jatinpanesiya2003@gmail.com" target="_blank">
                Let's connect ✨
              </a>
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
