export const IntroBlock = () => {
  return (
    <div className="container mx-auto mt-8 px-8 md:mt-32">
      <h1 className="text-bold w-full p-1 text-xl md:text-5xl lg:text-6xl">
        Hello 👋
      </h1>
      <h1 className="w-full p-1 text-3xl md:text-6xl lg:text-8xl">
        I'm Robin Philip Thomas.
      </h1>
      <h1 className="w-full p-1 text-2xl md:text-5xl lg:text-7xl">
        I build things for the web
      </h1>

      <div className="mt-12 w-full md:mt-52">
        <div className="flex justify-center text-sm md:justify-between md:text-2xl">
          <div className="font-semibold">Some things I’ve built 👇</div>
          <div className="hidden font-semibold md:block">Contact me</div>
        </div>

        <div className="mt-1 border-t border-manatee"></div>
      </div>
    </div>
  );
};
