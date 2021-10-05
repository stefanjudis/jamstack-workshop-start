import posts from "../data/posts";

/**
 * This method is called in `/pages/index.js`
 */
export async function getAllPostsForHome() {
  // TODO Change me, I want to make HTTP calls!
  return posts;
}

/**
 * This method is called in `/pages/posts/[slug].js`
 */
export async function getAllPostsWithSlug() {
  // TODO Change me, I want to make HTTP calls!
  return posts;
}

/**
 * This method is called in `/pages/posts/[slug].js
 *
 * @param {String} slug
 */
export async function getPostAndMorePosts(slug) {
  // TODO Change me, I want to make HTTP calls!
  const currentPost = posts.find((post) => post.slug === slug);

  if (!currentPost) {
    return {
      post: false,
    };
  }

  const morePosts = posts
    .filter((post) => currentPost.slug !== post.slug)
    .slice(0, 2);

  return {
    post: currentPost,
    morePosts,
  };
}
