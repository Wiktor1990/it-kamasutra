import React from "react";
import classes from './Post.module.css'

const Post = (props) => {

    return (
        <div className={classes.item}>
            <img src='https://sm.ign.com/t/ign_pl/screenshot/default/avatarjpg-b21b3a_43643_zzwt.1280.jpg'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>

)
}
export default Post;