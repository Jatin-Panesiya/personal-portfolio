import { Button } from "@mantine/core";
import CardHeading from "./CardHeading";
import { cirtification } from "../constants";

const Certifications = () => {
  return (
    <div className="container">
      <CardHeading title="Certifications" />
      <div className="my-5 800:my-10 grid gap-5">
        {cirtification.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            className="bg-[#2a2934] border border-transparent transition-all duration-150 hover:border hover:shadow-md hover:shadow-btnBg/10 gap-3 hover:border-btnBg rounded py-3 px-5 flex justify-between items-center cursor-pointer "
          >
            <span className="text-sm 400:text-base 600:text-xl">
              {item.title}
            </span>
            <Button className="bg-btnBg text-black hover:bg-btnBg/90 text-base font-semibold shrink-0">
              View
            </Button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
