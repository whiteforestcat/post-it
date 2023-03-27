import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostLists = () => {
  // const posts = useSelector((state) => state.posts);
  // accessing posts (see store)
  // not using further dot notation because want to access entire object of initialState

  // better way to use useSelector when importing entire initialState object
  const posts = useSelector(selectAllPosts);

  // below sorts the posts by time where most recent is at the top
  const orderedPosts = posts
    .slice() // posts.slice creates shallow copy of posts
    .sort((a, b) => b.date.localeCompare(a.date));
  // date.localeCompare compares date of b with a and returns -1, 0 or 1 if b is before, same or after
  // sort then arrange -1, 0 or 1 in ascending order

  const renderedPosts = orderedPosts.map((post) => {
    // here change to map orderedPosts instead of posts to get the most recent at the top
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <p className="postCredit">
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </p>
      </article>
    );
  });

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
      {/* {console.log(renderedPosts)} */}
    </section>
  );
};

export default PostLists;
