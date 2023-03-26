import { useState } from "react";
import Counter from "./features/counter/Counter";
import PostLists from "./features/posts/PostLists";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <AddPostForm />
      <PostLists />
    </div>
  );
}

export default App;
