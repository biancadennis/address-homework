// Reducer function goes here
import{UPDATESEARCH, searchIt, SEARCHISSET, RENDERRESULTS} from '../actions';

const initialState = {
	APIsearch: "",
	resultsList:[]
};

export default (state = initialState, action) => {
	switch (action.type) {
		case UPDATESEARCH:
			return Object.assign({}, state,{
				APIsearch: action.APIsearch
			})
		case RENDERRESULTS:
			return Object.assign({}, state,{
				resultsList: action.resultsList
			})
		default: 
			return state;
	}
}