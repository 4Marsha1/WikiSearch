import { FETCH_SEARCH_FAILED, FETCH_SEARCH_INITIATED, FETCH_SEARCH_SUCCESS } from "../actions/types"

const initialState = {
    loading: false,
    data: {},
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_INITIATED:
            return {
                loading: true,
                data: {},
                error: ''
            }
        case FETCH_SEARCH_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_SEARCH_FAILED:
            return {
                loading: false,
                data: {},
                error: action.payload
            }
        default: return state;
    }
}

export default reducer;