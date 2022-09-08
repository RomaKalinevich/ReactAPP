import React from "react";
import styles from'./Post.module.css';
const Post = (props) => {
    return <div className={styles.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4HvloBhZVvCau4er4R7GJV3y0k-01b4sLiQ&usqp=CAU" alt="desc"></img>
          {props.message}
          <div>
            <span>{props.likesCount}</span>
          </div>
        </div>
}

export default Post