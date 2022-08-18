import { useEffect, useState } from "react";

async function gql(query, variables = {}) {
  const data = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return data.json();
}

const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "Robie577") {
            publication {
                posts(page: $page) {
                  title
                  brief
                  slug
                  isActive
                  dateAdded
                }
            }
        }
    }
`;

export const useBlogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const {
        data: {
          user: {
            publication: { posts },
          },
        },
      } = await gql(GET_USER_ARTICLES, { page: 0 });

      if (posts.length) {
        setBlogPosts(posts.filter((p) => p.isActive).slice(0, 4));
      }
    })();
  }, []);

  return blogPosts;
};
