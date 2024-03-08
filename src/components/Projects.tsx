import { projectData } from "../constants";
import CardHeading from "./CardHeading";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="py-5">
      <div className="container">
        <CardHeading title="Projects" />
        <div className="my-10 grid 700:grid-cols-2 1000:grid-cols-3 1300:grid-cols-4 gap-5">
          {projectData.map(({ link, img, title, tech, features }, index) => (
            <ProjectCard
              key={index}
              img={img}
              link={link}
              features={features}
              title={title}
              tech={tech}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
