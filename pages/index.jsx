import Head from "next/head";
import { BlogsBlock } from "../components/Home/blogs";
import { IntroBlock } from "../components/Home/intro-block/index";
import ProjectsBlock from "../components/Home/projects";

const Home = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Robin Philip Thomas's portfolio website."
        />
      </Head>

      <div className="w-full">
        <IntroBlock />

        <ProjectsBlock />

        <BlogsBlock />
      </div>
    </>
  );
};

export default Home;
