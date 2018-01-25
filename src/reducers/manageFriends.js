export function manageFriends(state, action, friend){
  let newFriend = action.friend

  switch(action.type) {
    case 'INCREASE':
        return {numberOfFriends: state.numberOfFriends + 1}
    case 'DECREASE':
        return {numberOfFriends: state.numberOfFriends - 1}
    case 'ADD_FRIEND':
        return {friends: [
          ...state.friends,
          action.friend
        ]
      }
    case 'REMOVE_FRIEND':
        let newFriends = state.friends.filter(f => f.id != action.id)
        return {friends: newFriends}
    default:
     return state;
  }
}
