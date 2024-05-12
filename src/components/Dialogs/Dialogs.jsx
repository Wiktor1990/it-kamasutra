import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {



    let dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id}  name={d.name} id={d.id}/>);

    let messagesElements = props.state.messages.map(m => <Message key={m.id} message={m.message}/>);

    let myFriends = React.createRef();
    let addMessage =()=>{
        let text = myFriends.current.value
        alert(text)

    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea ref={myFriends}></textarea>
                </div>

                <button onClick={addMessage}>Search</button>
            </div>
        </div>
    )
}
export default Dialogs