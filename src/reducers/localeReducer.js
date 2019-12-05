import {
    SET_CURRENT_LANG,
    GET_CURRENT_LANG
} from '../actions/types';

const initialState = {
    lang: localStorage.getItem('lang') || 'en'
};

export default function locale(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_LANG:
            return {
                ...state,
                lang: action.payload
            };
        case GET_CURRENT_LANG:
            return state;
        default:
            return state;
    }
};