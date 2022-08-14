import { ProjectItem } from "./project-item";
import { ProjectsInfoList } from "./projects-info";

const ProjectsBlock = () => {
  return (
    <div id="home-projects" className="container mx-auto mt-32 px-8 md:mt-52">
      <div className="flex flex-col gap-52 lg:gap-64">
        {ProjectsInfoList.map((project) => (
          <ProjectItem info={project} key={project.title} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsBlock;
