import { projectCard } from "../interfaces";

const ProjectCard = ({ link, img, title, tech, features }: projectCard) => {
  return (
    <div
      onClick={() => {
        window.open(link, "_blank");
      }}
      className="w-full 620:w-[280px] min-h-72 rounded-xl bg-white text-black cursor-pointer hover:scale-105 transition-all duration-300 shadow-2xl shadow-btnBg/20 "
    >
      <img src={img} alt="Omegle" className="w-full 620:h-40 rounded-t-xl" />
      <div className="p-3">
        <p className="font-semibold text-lg pb-2">{title}</p>
        <span className="text-gray-600 text-[13px] flex flex-wrap">
          {tech.map((data, index) => (
            <p key={index}>
              {data}
              {index + 1 < tech.length && <>,&nbsp;</>}
            </p>
          ))}
        </span>
        <span className="flex flex-wrap gap-2 py-2.5">
          {features.map((data, index) => (
            <p
              key={index}
              className="py-0.5 bg-btnBg/40 rounded text-center shadow-md font-medium px-2 text-xs"
            >
              {data}
            </p>
          ))}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
