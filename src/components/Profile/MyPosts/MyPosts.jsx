import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";
//////////////////////////////////////////////////////////////////////////////
// let addPostActionCreator = () => {
//     return {
//         type:"ADD-POST",
//     }
// }
// let updateNewPostTextActionCreator = (text) => {
//     return {
//         type: "UPDATE-NEW-POST-TEXT",
//         newText: text,
//     }
// }


///////////////////////////////////////////////////////////////////////////////
const MyPosts = (props) => {

    let postsElements = props.posts.map ( p => < Post message={p.message} likeCounter={p.likeCounter}  /> );

    let newPostElement = React.createRef();

    let addPost = () => {
            // props.addPost();
            // props.dispatch( {type:"ADD-POST"} )
            props.dispatch( addPostActionCreator() );
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        // props.dispatch( {type: "UPDATE-NEW-POST-TEXT", newText: text} );
        props.dispatch( updateNewPostTextActionCreator(text) );
    }

                                        //////////////////////////
    return(
        <div className={s.postsBlock}>

                <h3>My posts</h3>

                <div>
                    <div>
                        <textarea ref={newPostElement}   value={props.newPostText}   onChange={onPostChange}/>
                    </div>
                    <div>
                        <button onClick={ addPost } >Add post</button>
                    </div> 
                </div>

                <div className={s.posts}>
                    { postsElements }
                </div>

        </div>
    )
}
export default MyPosts;