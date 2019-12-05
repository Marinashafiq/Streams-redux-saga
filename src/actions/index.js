import {
    SIGN_IN,
    SIGN_OUT,
    RECEIVE_STREAMS,
    REQUEST_STREAMS,
    RECEIVE_STREAM,
    REQUEST_STREAM,
    UPDATE_STREAM,
    NEW_STREAM,
    REQUEST_DELETE_STREAM,
    REQUEST_NEW_STREAM,
    REQUEST_UPDATE_STREAM,
    SET_CURRENT_LANG,
    GET_CURRENT_LANG,
} from './types';

import { store } from '../index';



export const signIn = userId => {

    return {
        type: SIGN_IN,
        payload: userId
    };
}


export const signOut = () => {
    return {
        type: SIGN_OUT
    };
}

// GET ALL STREAMS
export const requestStreams = () => ({ type: REQUEST_STREAMS });
export const receiveStreams = data => ({ type: RECEIVE_STREAMS, payload: data });

// GET STREAM DETAILS
export const requestStream = id => ({ type: REQUEST_STREAM, id });
export const receiveStream = data => ({ type: RECEIVE_STREAM, payload: data });

// EDIT STREAM DETAILS
export const updateStream = (id, data) => ({ type: UPDATE_STREAM, payload: { data, id } });
export const requestUpdateStream = (id, data) => ({ type: REQUEST_UPDATE_STREAM, payload: { data, id } });

// ADD NEW STREAM WITH AUTH
export const requestNewStream = data => {
    const { userId } = store.getState().auth
    return { type: REQUEST_NEW_STREAM, payload: { ...data, userId } };
}

export const newStream = data => {
    const { userId } = store.getState().auth
    return { type: NEW_STREAM, payload: { ...data, userId } }
};

// DELETE STREAM
export const requestDelete = id => ({ type: REQUEST_DELETE_STREAM, payload: id });
// export const deleteStream = id => ({ type: DELETE_STREAM, payload: id })

// LOCALIZATION
export const setCurrentLang = lang => ({ type: SET_CURRENT_LANG, payload: lang });
export const getCurrentLang = () => ({ type: GET_CURRENT_LANG });





