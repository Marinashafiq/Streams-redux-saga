import _ from 'lodash';

import {
    RECEIVE_STREAMS,
    RECEIVE_STREAM,
    UPDATE_STREAM,
    NEW_STREAM,
    DELETE_STREAM,
    REQUEST_DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case RECEIVE_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case NEW_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case RECEIVE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case UPDATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case REQUEST_DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}

// export const streamsReducer = (state = {}, { type, data }) => {
//     switch (type) {
//         case RECEIVE_STREAMS:
//             return data;
//         default:
//             return state;
//     }
// }

// export const streamReducer = (state = {}, { type, data }) => {
//     switch (type) {
//         case RECEIVE_STREAM:
//             return data;
//         case UPDATE_STREAM:
//             return data;
//         case NEW_STREAM:
//             return data;
//         case REQUEST_DELETE_STREAM:
//             return data;
//         default:
//             return state;
//     }
// }






