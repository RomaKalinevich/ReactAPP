import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators/validators"
import {Textarea} from "../../common/FormControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

class MyPostsForm extends React.Component {
    render() {
        let postElement = this.props.posts.map(p => <Post key={p.id} message={p.text} likesCount={p.likesCount}/>)

        let onAddPost = (values) => {
            this.props.addPost(values.newMessage);
        }

        return <div className={styles.postsBlock}>
            <h2>
                My posts
            </h2>
            <MyPostFormRedux onSubmit={onAddPost}/>
            <div className={styles.posts}>
                {postElement}
            </div>
        </div>
    }
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newMessage"} component={Textarea} validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const MyPostFormRedux = reduxForm({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm)


export default MyPostsForm