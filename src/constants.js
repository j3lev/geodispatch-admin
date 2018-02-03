let settings;

switch (process.env.REACT_APP_API) {
    case 'local':
        settings = { API_ROOT: 'http://localhost:3001' };
        break;
    case 'qa':
        settings = { API_ROOT: '' };
        break;
    default:
        settings = {};
}

export const SETTINGS = settings;


export const ACTIONS = {
    ADD_MARKER: 'ADD_MARKER',
    ADD_MARKER_SUCCESS: 'ADD_MARKER_SUCCESS',
    ADD_MARKER_FAIL: 'ADD_MARKER_FAIL',
    TOGGLE_MARKER_MODAL: 'TOGGLE_MARKER_MODAL',
    SOCKET_CONNECTION_ESTABLISHED: 'SOCKET_CONNECTION_ESTABLISHED',
    SOCKET_CONNECTION_ERR: 'SOCKET_CONNECTION_ERR',
    CLOSE_SOCKET: 'CLOSE_SOCKET'
}