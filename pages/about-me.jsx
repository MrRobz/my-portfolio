import Image from "next/image";
import Link from "next/link";
import ProfileImg from "../public/robin-2.png";

const AboutMe = () => {
  const yearsOfExp = new Date().getFullYear() - 2016;

  return (
    <div className="w-full">
      <div className="container mx-auto mt-8 px-8 md:mt-8 lg:px-72">
        <div className="pl-8">
          <Image
            src={ProfileImg}
            className="h-20 w-20 rounded-full bg-blue-200 object-cover"
            height={200}
            width={200}
            alt="robin profile image"
          />
        </div>

        <div className="mt-12 text-2xl">
          Hi there! I&apos;m Robin, a frontend dev.
        </div>
        <div className="mt-4 text-base italic leading-loose text-gray">
          Growing up, I always had an affinity for everything tech related.
          Modding my ps2, installing custom ROMs on my android phone(and nearly
          bricking them) or building mini robots with an Arduino were some of
          the things that developed my problem solving skills.
        </div>

        <p className="mt-4 text-xl leading-loose text-gray">
          Fast-forward to today, and I’ve had the privilege of{" "}
          <a
            href="https://blog.robie.dev/how-building-a-startup-in-college-helped-me-shape-my-college-life-and-get-a-high-paying-job"
            className="underline hover:text-primary"
          >
            building a startup in college
          </a>
          (which later got shutdown), working at startups(big and small) to
          co-organize and attend many tech meetups.
        </p>

        <p className="mt-4 text-xl leading-loose text-gray">
          The world of web development fascinates me today, creating new
          experiences, implementing eye pleasing designs and making them come to
          life with animation is what I love. I have {yearsOfExp} years of
          experience as a developer and love working with React and other hip
          frameworks.
        </p>

        <p className="mt-4 text-xl leading-loose text-gray">
          In my free time I love building{" "}
          <Link href="/#home-projects">
            <span className="cursor-pointer underline hover:text-primary">
              indie projects
            </span>
          </Link>
          to help me automate stuff or learn new technologies.
        </p>
      </div>
    </div>
  );
};
export default AboutMe;
