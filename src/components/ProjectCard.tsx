import { Badge } from "@mantine/core";
import { projectCard } from "../interfaces";

const ProjectCard = ({ link, img, title, tech, features }: projectCard) => {
  return (
    <div
      onClick={() => {
        window.open(link, "_blank");
      }}
      className="w-full relative min-h-72 rounded-xl p-[1px] bg-slate-100 text-black cursor-pointer hover:scale-105 transition-all duration-300"
    >
      <img
        src={img}
        loading="lazy"
        alt="Omegle"
        className="w-full rounded-t-xl aspect-video object-cover object-top"
      />
      <div className="p-3">
        <p className="font-semibold text-lg pb-2">{title}</p>
        <span className="text-gray-600 text-[13px] flex flex-wrap min-h-10">
          {tech.map((data, index) => (
            <p key={index}>
              {data}
              {index + 1 < tech.length && <>,&nbsp;</>}
            </p>
          ))}
        </span>
        <span className="flex flex-wrap gap-2 py-2.5">
          {features.map((data, index) => (
            <Badge
              color="#006a51"
              className="capitalize font-normal"
              opacity={0.8}
              key={index}
            >
              {data}
            </Badge>
          ))}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
