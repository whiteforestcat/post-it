import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
// nanoid is like uuid, nanoid is used because it is already in redux, no need to download more libraries
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const dispatch = useDispatch();

  const onSavePostClicked = () => {
    if (title && content) {
      //   dispatch(postAdded({ id: nanoid(), title, content }));
      dispatch(postAdded(title, content));  // can refactor the above line into splice.js to make code neater

      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form action="">
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        {/* textarea created a big box of text */}
        <textarea
          name="postContent"
          id="postContent"
          cols="30"
          rows="10"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
