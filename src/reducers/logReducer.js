import {GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOGS} from '../actions/types';


const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
};
// get logs from server
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case LOGS_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload
            };
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            };
        case ADD_LOGS:
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            }
        default:
            return state;
    }
}