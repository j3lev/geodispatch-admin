import { ACTIONS } from '../constants';

export function handleConnectErr() {
    return { type: ACTIONS.SOCKET_CONNECTION_ERR };
}

export function handleConnectEstablished() {
    return { type: ACTIONS.SOCKET_CONNECTION_ESTABLISHED }; 
}