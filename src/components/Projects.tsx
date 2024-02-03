import CardHeading from "./CardHeading";
import ProjectCard, { projectCard } from "./ProjectCard";

const projectData:projectCard[] = [
    {
        id:1,
        img:"/omegle.png",
        tech:["Next.js 14","Tailwind Css", "Socket.io",],
        features:["Random Video Call","Responsive", "Multi Language",],
        link:"https://omegle.nu",
        title:"Omegle Clone"
    },
    
]
const Projects = () => {
  return (
    <div className="py-5">
      <div className="container">
        <CardHeading title="Projects" />
        <div className="my-10 grid grid-cols-4 gap-5">
            {
                projectData.map(({link,img,title,tech,features},index)=>(
                    <ProjectCard key={index} img={img} link={link} features={features} title={title} tech={tech} />
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Projects;
