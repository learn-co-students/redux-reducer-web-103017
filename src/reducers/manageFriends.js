export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      const stateCopy = Object.assign({}, state)
      stateCopy.friends.push(action.friend)
      return stateCopy

    case 'REMOVE_FRIEND':
      const id = action.id
      const newFriends = state.friends.filter(friend => friend.id !== id)
      return {friends: newFriends}

    default:
      return state
  }
}
