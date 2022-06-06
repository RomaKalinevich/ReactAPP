import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [{id:1, text: "Hi, how are you", likesCount: 12},
                 {id:2, text: "It is my first post", likesCount: 2}];
    let postElement = posts.map(p => <Post message={p.text} likesCount={p.likesCount}/>)

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
            { postElement }
        </div>
    </div>
}

export default MyPosts