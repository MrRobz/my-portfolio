export const BlogItem = ({ blog }) => {
  return (
    <a href={`https://blog.robie.dev/${blog.slug}`}>
      <div className="flex h-full w-full flex-col">
        <div
          className="mt-6 overflow-hidden text-3xl font-semibold hover:text-primary md:h-20"
          title={blog.title}
          style={{
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
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
  );
};
