const initialStateOfThisReducer = {
	name: null
}

export default function someReducer(state = initialStateOfThisReducer, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return Object.assign({}, state, { name: action.data });
    default:
      return state;
  }
}
