const initialState = {
	number: 1,
};

function increment(num){
	return num + 1;
}

function decrease(num){
	return num - 1;
}
function incrementOdd(num){
	const isOdd = (num % 2 !== 0) ? true : false;
	if (isOdd) return num + 1;
}

export default function countReducer(state = initialState, action){
	switch(action.type){
		case 'count/increment':
			return {
				...state,
				number: increment(state.number),
			}
		case 'count/decrease':
			return {
				...state,
				number:	decrease(state.number),
			}
		case 'count/incrementOdd':
			return {
				...state,
				number:	incrementOdd(state.number),	
			}
		default:
			return state;
	}
}