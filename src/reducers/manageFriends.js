export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
                let oldFriends = state.friends
                let newFriends = [...oldFriends, action.friend]
            return {friends: newFriends}

        default:
            return state;
    }
}
