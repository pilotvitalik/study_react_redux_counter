const initialState = {};

function increment(num){
	return num + 1;
}

function decrease(num){
	return num - 1;
}
function incrementOdd(num){
	const isOdd = (num % 2 !== 0) ? true : false;
	if (isOdd) return num + 1;
	return num;
}

export default function countReducer(state = initialState, action){
	switch(action.type){
		case 'applyMiddleware':
			return {
				...state,
				number: increment(state.number),
			}
		case 'count/initVal':{
			return action.payload
		}
		case 'count/increment':
			return {
				...state,
				number:	increment(state.number),
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

export async function fetchTodos(dispatch, getState) {
  dispatch({ type: 'count/initVal', payload: {number: 1} });
}

export async function incrementAsync(dispatch, getState){
	dispatch({type: 'count/asyncIncrement', payload: 1});
}