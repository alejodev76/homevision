import { 
    GET_PROPERTY_LIST_START, 
    GET_PROPERTY_LIST_END , 
    GET_PROPERTY_LIST_ERROR 
} from "./constants";

const initialState = {
    properties: [],
    page: 1,
    retries: 0,
    isLoading: true
}
const reducer = (state = initialState, { type }) => {
	switch (type) {
		case LOG_POST_RESULT:
			return {
				...state,
				isLoading: false
			};
		default:
			return state;
	}
};

export default reducer;