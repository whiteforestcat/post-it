import { useState } from "react";
import Counter from "./features/counter/Counter";
import PostLists from "./features/posts/PostLists";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <PostLists />
    </div>
  );
}

export default App;
