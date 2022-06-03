import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={styles.postsBlock}>
        <h2>
            My posts
        </h2>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={styles.posts}>
            <Post message="Hi, how are you"/>
            <Post message="It is my first post"/>
        </div>
    </div>
}

export default MyPosts