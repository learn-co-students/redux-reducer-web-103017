export function manageFriends(state = {
  friends: [],
}, action) {
switch(action.type) {
  case 'ADD_FRIEND':
    return {friends: [...state.friends, action.friend]}
  case 'REMOVE_FRIEND':
    const friends = state.friends.filter(friend => friend.id !== action.id)
    return {...state, friends}
  default:
    return state

  }
}
