import Head from "next/head";
import { ProjectItem } from "../components/Home/projects/project-item";
import { ProjectsInfoList } from "../components/Home/projects/projects-info";

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="A list of side-projects done by Robin Philip Thomas."
        />
      </Head>
      <div className="w-full">
        <div className="container mx-auto mt-8 px-8 md:mt-8">
          <h1 className="text-bold w-full p-1 text-5xl lg:text-6xl">
            Projects
          </h1>

          <div className="mt-20">
            <div className="flex flex-col gap-52 lg:gap-64">
              {ProjectsInfoList.map((project) => (
                <ProjectItem key={project.title} info={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectsPage;
