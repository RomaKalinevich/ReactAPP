import React from "react";
import styles from'./MyPosts.module.css';
import Post from "./Post/Post";
const MyPosts = () => {
    return <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message="Hi, how are you"/>
      <Post message="It is my first post"/>
    </div>
}

export default MyPosts