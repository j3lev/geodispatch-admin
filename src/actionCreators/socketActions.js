import { ACTIONS } from '../constants';
import { connectToDispatchServer } from '../api';

let socket;

function _emitEvent(eventName, initialAction, successfulAction, payload) {
    return dispatch => {
        dispatch(initialAction);
        socket.emit(eventName, payload, () => {
            dispatch(successfulAction);
        });
    }
}

export function initializeSocket() {
    socket = connectToDispatchServer();

    return dispatch => {

        // All event listeners gotta go here
        socket.on('connect', () => {
            dispatch({ type: ACTIONS.SOCKET_CONNECTION_ESTABLISHED });
        });
    
        socket.on('connect_error', () => {
            dispatch({ type: ACTIONS.SOCKET_CONNECTION_ERR });
        });

        socket.on(ACTIONS.ADD_MARKER_SUCCESS, data => {
            dispatch({ type: ACTIONS.ADD_MARKER_SUCCESS, longLat: data.longLat });
        });
    }
}

export function closeSocket() {
    socket.close();
    return { type: ACTIONS.CLOSE_SOCKET };
}

export function addMarker(longLat) {
    return dispatch => {
        dispatch({ type: ACTIONS.ADD_MARKER, longLat });
        socket.emit(ACTIONS.ADD_MARKER, { longLat });
    }
}