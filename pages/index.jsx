import Image from "next/image";
import { IntroBlock } from "../components/Home/intro-block";
import ProjectsBlock from "../components/Home/projects";

const Home = () => {
  return (
    <div className="w-full">
      <IntroBlock />

      <ProjectsBlock />
    </div>
  );
};

export default Home;
