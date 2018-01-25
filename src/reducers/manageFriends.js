export function manageFriends(state, action){

  switch (action.type) {
    case "ADD_FRIEND":
      return Object.assign({}, state, {
        friends: [...state.friends, action.friend]
      })

    case "REMOVE_FRIEND":
     const friend = state.friends.findIndex(f => f.id === action.id)
     const friends = state.friends
      return Object.assign({}, state, {
        friends: [...friends.slice(0, friend), ...friends.slice(friend +1)]
      })
    default:
      return state


  }

}
