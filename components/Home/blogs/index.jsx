import { BlogItem } from "./blog-item";
import { useBlogs } from "./use-blogs";

export const BlogsBlock = () => {
  const blogs = useBlogs();

  return (
    <div id="home-blogs" className="container mx-auto mt-32 px-8 md:mt-52">
      <h4 className="text-center text-4xl font-medium md:text-5xl">
        From the blog
      </h4>
      <div className="mt-12 grid grid-cols-1 place-content-center gap-12 md:grid-cols-2">
        {blogs.map((blog) => (
          <BlogItem blog={blog} key={blog.title} />
        ))}
      </div>
      <div className="mt-20 flex items-center justify-center">
        <a
          href="https://blog.robie.dev"
          className="rounded-lg border-2 border-gray px-4 py-2 text-lg font-medium text-gray opacity-75 hover:opacity-100 lg:font-semibold"
        >
          View more
        </a>
      </div>
    </div>
  );
};
