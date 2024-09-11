import { useState } from "react";
import MainHeader from "./components/MainHeader";
import Post from "./components/Post";
import PostList from "./components/PostList";

function Posts() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function showModalHandler() {
    setIsModalVisible(true);
  }

  function hideModalHandler() {
    setIsModalVisible(false);
  }
  return (
    <body>
      <MainHeader onCreatePost={showModalHandler} />
      <PostList isPosting={isModalVisible} onStopPosting={hideModalHandler} />
    </body>
  );
}

export default Posts;
