import { ProjectItem } from "./project-item";
import { ProjectsInfoList } from "./projects-info";
import Link from "next/link";

const ProjectsBlock = () => {
  const projectsList = ProjectsInfoList.filter((p) => p.featured);

  return (
    <div id="home-projects" className="container mx-auto mt-32 px-8 md:mt-52">
      <div className="flex flex-col gap-52 lg:gap-64">
        {projectsList.map((project) => (
          <ProjectItem key={project.title} info={project} />
        ))}
      </div>

      <div className="mt-20 flex items-center justify-center">
        <Link href="/projects">
          <span className="cursor-pointer rounded-lg border-2 border-gray px-4 py-2 text-lg font-medium text-gray opacity-75 hover:opacity-100 lg:font-semibold">
            View more
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsBlock;
