import { BlogItem } from "./blog-item";
import { useBlogs } from "./use-blogs";

export const BlogsBlock = () => {
  const blogs = useBlogs();

  return (
    <div id="home-blogs" className="container mx-auto mt-32 px-8 md:mt-52">
      <h4 className="text-center text-5xl font-medium">From the blog</h4>
      <div className="mt-12 grid grid-cols-1 place-content-center gap-12 md:grid-cols-2">
        {blogs.map((blog) => (
          <BlogItem blog={blog} key={blog.title} />
        ))}
      </div>
    </div>
  );
};
