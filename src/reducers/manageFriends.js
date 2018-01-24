export function manageFriends(state = {friends: []}, action) {
  switch(action.type) {
    case "ADD_FRIEND":
      return Object.assign({}, state, {
        friends: [...state.friends, action.friend]
      });
    case "REMOVE_FRIEND":
      const oldFriends = state.friends.filter(x => x.id !== action.id)
      return Object.assign({}, state, {
        friends: oldFriends
      });
    default:
      return state;
    }
}
