export function manageFriends(state, action){
    let oldFriends = state.friends
    let newFriends = []
    switch (action.type) {
        case 'ADD_FRIEND':
                newFriends = [...oldFriends, action.friend]
            return {friends: newFriends};
        case 'REMOVE_FRIEND':
                oldFriends.forEach(function (friend) {
                    if (friend.id !== action.id) {
                        newFriends = [...newFriends, friend]
                    }
                })
            return {friends: newFriends};
        default:
            return state;
    }
}
