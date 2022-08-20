const Footer = () => {
  return (
    <footer id="footer" className="mt-32 w-full bg-gray2 md:mt-52">
      <div className="container mx-auto px-8 pt-16 pb-8">
        <div className="text-3xl font-medium lg:text-5xl">
          Let&apos;s create something together.
        </div>

        <div className="mt-12 flex justify-between lg:text-xl">
          <a
            href="https://twitter.com/Robie577"
            target="_blank"
            className="underline underline-offset-4 hover:text-primary"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://github.com/MrRobz"
            target="_blank"
            className="underline underline-offset-4 hover:text-primary"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/robinpt/"
            target="_blank"
            className="underline underline-offset-4 hover:text-primary"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://blog.robie.dev"
            target="_blank"
            className="underline underline-offset-4 hover:text-primary"
            rel="noreferrer"
          >
            Blog
          </a>
          <a
            href="mailto:robinphilipthomas@outlook.in"
            target="_blank"
            className="underline underline-offset-4 hover:text-primary"
            rel="noreferrer"
          >
            Email
          </a>
        </div>

        <div className="mt-14 text-xs text-gray ">
          © {new Date().getFullYear()} Robin Philip Thomas - All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
