import { ACTIONS } from '../constants';

export const connectionReducer = (state = { err: false, active: false }, action) => {
    switch (action.type) {
        case ACTIONS.SOCKET_CONNECTION_ESTABLISHED:
            return { ...state, err: false, active: true };
        case ACTIONS.SOCKET_CONNECTION_ERR:
            return { ...state, err: true, active: false };
        default:
            return state;
    }
}