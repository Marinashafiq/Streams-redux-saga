import { call, put, takeLatest } from 'redux-saga/effects';
import {
    RECEIVE_STREAMS, REQUEST_STREAMS, RECEIVE_STREAM, REQUEST_STREAM, UPDATE_STREAM,
    NEW_STREAM,
    REQUEST_DELETE_STREAM,
    REQUEST_NEW_STREAM,
    REQUEST_UPDATE_STREAM,
    DELETE_STREAM
} from './actions/types';
import api from "./apis";

import history from './history';
function* getStreams() {
    try {
        const response = yield call(api.getStreams);
        // console.log(response);
        yield put({ type: RECEIVE_STREAMS, payload: response.data });
    } catch (err) {
        console.log(err);
    }
}


function* getStream(action) {
    try {
        const { id } = action;
        const response = yield call(api.getStream, id);
        // console.log(response);
        yield put({ type: RECEIVE_STREAM, payload: response.data });
    } catch (err) {
        console.log(err);
    }
}

function* createStream(action) {
    console.log(action);
    try {
        const { payload } = action;
        const response = yield call(api.addStream, payload);
        // const response = yield call(api.getStreams);
        console.log(response);
        yield put({ type: NEW_STREAM, payload: response.data });
        history.push('/');

    } catch (err) {
        console.log(err);
    }
}

/**
 * Update a stream
 * @param {*} action 
 */
function* updateStream(action) {
    try {
        const { payload } = action;
        console.log(payload);
        const response = yield call(api.editStream, payload);
        // const response = yield call(api.posts);
        console.log(response);
        yield put({ type: UPDATE_STREAM, payload: response.data });

        history.push('/');
    } catch (err) {
        console.log(err);
    }
}

/**
 * Delete a post by a post id
 * @param {*} action 
 */
function* removeStream(action) {
    try {
        console.log(action);
        const { payload } = action;
        yield call(api.deleteStream, payload);
        history.push('/');
        const response = yield call(api.getStreams);
        console.log(response);
        yield put({ type: RECEIVE_STREAMS, payload: response.data });
    } catch (err) {
        console.log(err);
    }
}



/**
 * Get all the posts
 */
// function* getPosts() {
//     try {
//         const response = yield call(api.posts);
//         yield put({ type: RECEIVE_POSTS, data: response.data });
//     } catch (err) {
//         console.log(err);
//     }
// }

/**
 * Get all the posts
 */

/**
 * Get a post by post id
 * @param {*} action 
 */
// function* getPost(action) {
//     try {
//         const { id } = action;
//         const response = yield call(api.getPost, id);
//         yield put({ type: RECEIVE_POST, data: response.data });
//     } catch (err) {
//         console.log(err);
//     }
// }

/**
 * Delete a post by a post id
 * @param {*} action 
 */
// function* removePost(action) {
//     try {
//         const { id } = action;
//         yield call(api.deletePost, id);
//         const response = yield call(api.posts);
//         yield put({ type: RECEIVE_POSTS, data: response.data });
//     } catch (err) {
//         console.log(err);
//     }
// }

/**
 * Create a new post
 * @param {*} action 
 */
// function* createPost(action) {
//     try {
//         const { data } = action;
//         yield call(api.addPost, data);
//         const response = yield call(api.posts);
//         yield put({ type: RECEIVE_POSTS, data: response.data });
//     } catch (err) {
//         console.log(err);
//     }
// }

/**
 * Update a post
 * @param {*} action 
 */
// function* updatePost(action) {
//     try {
//         const { data } = action;
//         yield call(api.editPost, data);
//         const response = yield call(api.posts);
//         yield put({ type: RECEIVE_POSTS, data: response.data });
//     } catch (err) {
//         console.log(err);
//     }
// }

// Get the response of the latest request(s) 
export default function* mySaga() {
    yield takeLatest(REQUEST_STREAMS, getStreams);
    yield takeLatest(REQUEST_STREAM, getStream);
    yield takeLatest(REQUEST_NEW_STREAM, createStream);
    yield takeLatest(REQUEST_UPDATE_STREAM, updateStream);
    yield takeLatest(REQUEST_DELETE_STREAM, removeStream);
    // yield takeLatest(REQUEST_POSTS, getPosts);
    // yield takeLatest(REQUEST_POST, getPost);
    // yield takeLatest(NEW_POST, createPost);
    // yield takeLatest(UPDATE_POST, updatePost);
}