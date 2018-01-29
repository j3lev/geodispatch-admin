import io from 'socket.io-client';
import { SETTINGS } from '../constants';

export function connectToDispatchServer() {
    return io(SETTINGS.API_ROOT + '/dispatch');
}