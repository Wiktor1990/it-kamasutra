let store = {
    _state:{
        profilePage: {
            posts: [
                {id: 0, message: 'Hi, how are you', likesCount: 20},
                {id: 1, message: 'It\'s my first post', likesCount: 0},
                {id: 2, message: 'What you doing', likesCount: 35},
                {id: 3, message: 'you crazy?', likesCount: 333}
            ],
            newPostText:''
        },

        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi women'},
                {id: 3, message: 'What you doing'}
            ],
            dialogs: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Katia'},
                {id: 3, name: 'Varvara'},
                {id: 4, name: 'Mama'},
                {id: 5, name: 'Andrey'},
                {id: 6, name: 'Aleksandr'},
            ]
        }

    },
    getState ()  {
        debugger;
        return this._state;
    },

    _callSubscriber () {
        console.log('State changed ')
    },
    addPost () {
        let newPost = {
            id: this._state.profilePage.posts.length,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText='';
        this._callSubscriber(this._state);
    },
    updateNewPostText  (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;

    }
}





window.state= store;
export default store;