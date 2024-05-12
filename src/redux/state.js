let rerenderEntireTree = () =>{
    console.log('State changed ')
}

let state = {
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

}

window.state= state;

export const addPost = ()=>{
    let newPost = {
        id: state.profilePage.posts.length,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText='';
     rerenderEntireTree(state);
}

export const updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) =>{
    rerenderEntireTree = observer;

}


export default state;