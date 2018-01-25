export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      if (
        !!action.friend.name &&
        !!action.friend.hometown &&
        !!action.friend.id
      ) {
        return Object.assign({}, state, {
          friends: [...state.friends, action.friend]
        });
      }
    case "REMOVE_FRIEND":
      let id1 = state.friends.findIndex(friend => friend.id === action.id);
      return Object.assign({}, state, {
        friends: [
          ...state.friends.slice(0, id1),
          ...state.friends.slice(id1 + 1)
        ]
      });
    default:
      return state;
  }
}
