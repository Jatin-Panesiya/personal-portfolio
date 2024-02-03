
export interface projectCard{
    id?:number
    link:string;
    img:string;
    title:string;
    tech:string[];
    features:string[];
}

const ProjectCard = ({link,img,title,tech,features,id}:projectCard) => {
  return (
    <div
      onClick={() => {
        window.open(link, "_blank");
      }}
      className="w-80 min-h-80 card__radius bg-white text-black cursor-pointer hover:scale-110 transition-all duration-300 shadow-2xl shadow-btnBg/20"
    >
      <img
        src={img}
        alt="Omegle"
        className="border w-full img__radius"
      />
      <div className="p-3">
        <p className="font-semibold text-lg pb-2">{title}</p>
        <span className="text-gray-500 flex flex-wrap">
          {
            tech.map((data,index)=>(
                <p key={id}>{data}{index+1 < tech.length && <>, &nbsp;</>}</p>
            ))
          }
        </span>
        <span className="flex flex-wrap gap-2 py-3">
          {
            features.map((data)=>(
                <p key={id} className="py-0.5 bg-btnBg/50 rounded text-center shadow-md font-medium px-2 text-sm" >{data}</p>
            ))
          }
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
