import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostLists = () => {
  // const posts = useSelector((state) => state.posts);
  // accessing posts (see store)
  // not using further dot notation because want to access entire object of initialState

  // better way to use useSelector when importing entire initialState object
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
      </article>
    );
  });

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
      {console.log(renderedPosts)}
    </section>
  );
};

export default PostLists;
