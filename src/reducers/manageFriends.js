export function manageFriends(state, action){

    switch (action.type) {
        case 'ADD_FRIEND':
            return (
                {...state,
                    friends: [
                        ...state.friends,
                        action.friend
                    ]
                }
            )
        case 'REMOVE_FRIEND':
        const delete_index = state.friends.findIndex(friend => friend.id === action.id);
            return (

                {...state,
                    friends: [
                        ...state.friends.slice(0,delete_index),
                        ...state.friends.slice(delete_index+1,state.friends.length)
                    ]}
            )
        default: 
            return state;
    } 

}
