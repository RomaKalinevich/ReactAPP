import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [{id:1, text: "Hi, how are you", likesCount: 12},
                    {id:2, text: "It is my first post", likesCount: 2}]
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
            <Post message={postsData[0].text} likesCount={postsData[0].likesCount}/>
            <Post message={postsData[1].text} likesCount={postsData[1].likesCount}/>
        </div>
    </div>
}

export default MyPosts