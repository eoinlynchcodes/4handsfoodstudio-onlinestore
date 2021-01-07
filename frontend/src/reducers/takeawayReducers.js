import {
    TAKEAWAY_DATA_REQUEST,
    TAKEAWAY_DATA_RECEIVED,
    TAKEAWAY_DATA_ERROR,
    TAKEAWAY_DELETE_REQUEST,
    TAKEAWAY_DELETE_SUCCESS,
    TAKEAWAY_DELETE_ERROR
} from '../constants/takeawayConstants';

function getTakeawayReducer(state = { takeaway: {}}, action){
    switch(action.type){
        case TAKEAWAY_DATA_REQUEST:
            return { loading: true, takeaway: [] };
        case TAKEAWAY_DATA_RECEIVED:
            return { loading: false, takeaway: action.payload, success: true };
        case TAKEAWAY_DATA_ERROR:
            return { loading: false, error: action.payload };
        default: 
            return state;
    }
}

function deleteTakeawayReducer(state = { takeaway: {} }, action){
    switch(action.type){
        case TAKEAWAY_DELETE_REQUEST:
            return { loading: true };
        case TAKEAWAY_DELETE_SUCCESS:
            return { loading: false, takeaway: action.payload, success: true };
        case TAKEAWAY_DELETE_ERROR:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export {
    getTakeawayReducer,
    deleteTakeawayReducer
};