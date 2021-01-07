import Axios from 'axios';
import axios from 'axios';

import { TAKEAWAY_DATA_REQUEST, TAKEAWAY_DATA_RECEIVED, TAKEAWAY_DATA_ERROR, TAKEAWAY_DELETE_REQUEST, TAKEAWAY_DELETE_SUCCESS, TAKEAWAY_DELETE_ERROR } from '../constants/takeawayConstants';

const getTakeawayData = ( takeaway ) => async ( dispatch ) => {
    try {
        dispatch({ type: TAKEAWAY_DATA_REQUEST });
        const { data } = await axios.get('/api/takeaway/');
        dispatch({ type: TAKEAWAY_DATA_RECEIVED, payload: data });
    } catch (error) {
        dispatch( { type: TAKEAWAY_DATA_ERROR, payload: error.message });
    }
};

const deleteTakeawayData = (takeawayId) => async (dispatch, getState) => {
    try{
        dispatch({ type: TAKEAWAY_DELETE_REQUEST, payload: takeawayId });
        const { userSignin: { userInfo } } = getState();
        const { data } = await axios.delete('/api/takeaway/' + takeawayId, {
            headers: {
                Authorization: 'Bearer ' + userInfo.token,
            },
        });
        dispatch({ type: TAKEAWAY_DELETE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: TAKEAWAY_DELETE_ERROR, payload: error.message })
    }
};

export { 
    getTakeawayData,
    deleteTakeawayData
};