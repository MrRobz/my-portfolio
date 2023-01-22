import Link from "next/link";
import { AnimatedTextContainer } from "./animated-text";

export const IntroBlock = () => {
  return (
    <div className="container mx-auto mt-8 px-8 md:mt-32">
      <AnimatedTextContainer>
        <AnimatedTextContainer.Title
          className="text-bold w-full p-1 text-xl md:text-5xl lg:text-6xl"
          text={"Hello 👋"}
        />
        <AnimatedTextContainer.Title
          className="w-full p-1 text-3xl md:text-6xl lg:text-8xl"
          text={"I'm Robin Philip Thomas."}
        />
        <AnimatedTextContainer.Title
          className="w-full p-1 text-2xl md:text-5xl lg:text-7xl"
          text={"I build things for the web"}
        />
      </AnimatedTextContainer>

      <div className="mt-12 w-full md:mt-52">
        <div className="flex justify-center text-sm md:justify-between md:text-2xl">
          <Link href="#home-projects" className="font-normal">
            Some things I’ve built 👇
          </Link>
          <Link href="#footer" className="hidden font-normal md:block">
            Contact me
          </Link>
        </div>

        <div className="mt-1 border-t border-manatee"></div>
      </div>
    </div>
  );
};
