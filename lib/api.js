import posts from "../data/posts";

/**
 * TODO Change this file to implement Contentful's GraphQL API.
 */

export async function getAllPostsWithSlug() {
  // TODO Change me, I want to make HTTP calls!
  return posts;
}

export async function getAllPostsForHome() {
  // TODO Change me, I want to make HTTP calls!
  return posts;
}

export async function getPostAndMorePosts(slug) {
  // TODO Change me, I want to make HTTP calls!
  const currentPost = posts.find((post) => post.slug === slug);
  const morePosts = posts
    .filter((post) => currentPost.slug !== post.slug)
    .slice(0, 2);

  return {
    post: currentPost,
    morePosts,
  };
}
