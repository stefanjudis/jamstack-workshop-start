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

  const currentPostIndex = posts.findIndex((post) => post.slug === slug);
  const prevPost = posts[currentPostIndex - 1] || posts[posts.length - 1];
  const nextPost = posts[currentPostIndex + 1] || posts[0];

  if (!currentPost) {
    return {
      post: false,
    };
  }

  return {
    post: currentPost,
    morePosts: [prevPost, nextPost],
  };
}
