function email(state = {}, action) {
	switch(action.type) {
		case 'ADD_EMAIL':
			return {
				name: action.name,
				email: action.email
			};
		case 'REMOVE_EMAIL':
			if(state.i !== action.i) 
				return true;
			else 
				return false;
		default:
			return state;
	}
}

function emails(state = [], action) {
	switch(action.type) {
		case 'ADD_EMAIL':
			return [
  				...state,
  				email(undefined, action)
 			 ];
		case 'REMOVE_EMAIL':
			return state.filter(em => email(em, action));
		default:
			return state;
	}			 
}

export default emails;