import profileReducer, {deletePost} from "./profile-reducer";

it('test delete', function () {
    let action = deletePost(1);
    let state = {
        posts: [{id: 1, text: "Hi, how are you", likesCount: 12},
            {id: 2, text: "It is my first post", likesCount: 2}]

    }
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1);
});

