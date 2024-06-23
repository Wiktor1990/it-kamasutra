import React from "react";
import "./App.css"
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/friends";
import store, {updateNewPostText} from "./redux/state";

const App = (props) => {

    return (
        <div className="app-wrapper">

            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/friends" element={<Friends/>}/>

                    <Route path="/dialogs/*" element={<Dialogs
                        state={props.state.dialogsPage}/>}/>
                    <Route path="/profile" element={<Profile
                        profilePage={props.state.profilePage}
                        updateNewPostText={store.updateNewPostText}
                        addPost={props.addPost}/>}/>

                </Routes>
            </div>

        </div>)
}

export default App;
