export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return Object.assign({}, state, {
        friends: [
          ...state.friends, action.friend
        ]})
    case 'REMOVE_FRIEND':
      const friend = state.friends.findIndex(friend => friend.id === action.id)
      return Object.assign({}, state, {friends: [
        ...state.friends.slice(0, friend), ...state.friends.slice(friend + 1)
      ]})
    default:
      return state

  }
}
