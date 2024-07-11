import { Button } from "@mantine/core";
import { BsDownload } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="container h-[600px] flex items-center justify-between gap-10 max-[900px]:grid max-[900px]:h-auto">
      <div className="max-w-[500px] max-[900px]:order-2">
        <div className="text-3xl max-[600px]:text-2xl max-[450px]:text-xl font-merri-bold text-slate-100">
          I am <h1 className="inline">Jatin Panesiya</h1>
        </div>
        <p className="bg-gradient-to-r from-btnBg via-blue-500 to-white bg-clip-text text-transparent text-[65px] max-[600px]:text-[50px] max-[450px]:text-[40px] max-[380px]:text-[30px] font-bold">
          Web Developer
        </p>
        <div className="font-poppins-medium text-slate-300 leading-7 max-[450px]:text-sm">
          I’m a front-end developer with solid experience in creating and
          improving web applications using React.js, Next.js, and Tailwind CSS.
        </div>
        <Button className="border border-btnBg h-12 rounded-full font-normal text-btnBg hover:bg-btnBg hover:text-black transition-all duration-150 mt-10">
          <a
            href="/Resume.pdf"
            target="_blank"
            className="flex items-center px-3"
          >
            Download CV <BsDownload size={17} className="ms-3 font-bold" />
          </a>
        </Button>
      </div>
      <div className="max-[900px]:order-1">
        <img
          src="jatin.webp"
          className="max-w-[400px] max-h-[500px] h-full w-full rounded-[30px] object-cover border-[3px] max-[900px]:rotate-0  border-btnBg/40 hover:border-btnBg shadowSpread transition-all duration-300 rotate-[4deg] hover:rotate-0"
          alt="jatin"
        />
      </div>
    </div>
  );
};

export default HeroSection;
