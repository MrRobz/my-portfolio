import Image from "next/image";

export const ProjectItem = ({ info }) => {
  const { title, desc, tags, cover, link } = info;

  return (
    <div className="flex flex-col gap-12 lg:flex-row">
      <div className="flex flex-col gap-4 lg:basis-3/4 lg:gap-5">
        <div className="text-md flex flex-wrap gap-2 text-gray">
          {tags.map((tag) => (
            <div key={tag}>#{tag}</div>
          ))}
        </div>

        <div className="text-3xl font-semibold lg:text-4xl">{title}</div>
        <div className="text-xl leading-relaxed text-gray lg:leading-loose">
          {desc}
        </div>
        <div className="text-lg lg:font-semibold">
          <a
            href={link}
            target="_blank"
            className="font-medium text-primary"
            rel="noreferrer"
          >
            View project
          </a>
        </div>
      </div>

      <div className="w-full">
        <Image
          src={cover}
          objectFit="cover"
          className="rounded-3xl"
          alt="project-cover-image"
        />
      </div>
    </div>
  );
};
