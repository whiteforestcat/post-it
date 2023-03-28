import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();

  const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
  };

  const reactionButton = Object.entries(reactionEmoji).map(([name, emoji]) => {
    // note that [name, emoji] is the item in array not item and index
    // item is array destructured into name and emoji
    // destructuring into array is better than into object because there is no unique key name to use
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButton}</div>;
};

export default ReactionButton;
