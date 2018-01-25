export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      let friends = state.friends.concat({name: action.friend.name, id: action.friend.id, hometown: action.friend.hometown})
      return {friends: friends}
    case 'REMOVE_FRIEND':
      let newFriends = state.friends.filter((friend) => {
        return friend.id !== action.id;
      });
      return {friends: newFriends}
    default:
      return state;
  }
}
