let state = {
    profilePage:{
        posts:[{id:1, text: "Hi, how are you", likesCount: 12},
            {id:2, text: "It is my first post", likesCount: 2}]
    },
    dialogsPage: {
        messages: [{id: 1, message: "Hi"}, {id: 2, message: "Hello"}, {id: 3, message: "Hello world"},
            {id: 4, message: "Hello world Mother Fucker"}],
        dialogs: [{id: 1, name: "Roma"}, {id: 2, name: "Marta"},
            {id: 3, name: "Sasha"}, {id: 4, name: "Vica"}]
    }
}

export default state;