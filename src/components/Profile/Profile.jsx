import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import store, {updateNewPostText} from "../../redux/state";

const Profile = (props) => {

    return (
        <div className={classes.content}>
            <ProfileInfo/>

            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={store.updateNewPostText}
                     addPost={props.addPost}/>
        </div>
    )
}

export default Profile;