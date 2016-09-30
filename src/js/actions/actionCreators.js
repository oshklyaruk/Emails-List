// add email
export function addEmail(name, email) {
	return {
		type: 'ADD_EMAIL',
		name,
		email
	}	 
} 

// remove email
export function removeEmail(i) {
	return {
		type: 'REMOVE_EMAIL',
		i
	}	 
} 
