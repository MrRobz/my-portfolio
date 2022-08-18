import { useBlogs } from "./use-blogs";

export const BlogsBlock = () => {
  const blogs = useBlogs();

  return (
    <div id="home-blogs" className="container mx-auto mt-32 px-8 md:mt-52">
      <h4 className="text-center text-5xl font-medium">From the blog</h4>
      <div className="mt-12 grid grid-cols-2 place-content-center gap-12">
        {blogs.map((blog) => (
          <a href={`https://blog.robie.dev/${blog.slug}`} key={blog.title}>
            <div className="flex h-full w-full flex-col">
              <div className="mt-6 h-20 overflow-hidden text-3xl font-semibold hover:text-primary">
                {blog.title}
              </div>
              <div className="mt-3 flex gap-4 text-black">
                <div>
                  {new Date(blog.dateAdded).toLocaleDateString("en-US", {
                    dateStyle: "medium",
                  })}
                </div>
              </div>
              <div className="mt-3 text-base opacity-80">{blog.brief}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
