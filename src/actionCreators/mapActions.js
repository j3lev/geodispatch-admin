import { ACTIONS } from '../constants';

export function addMarker(longLat) {
    return dispatch => {
        dispatch({ type: ACTIONS.ADD_MARKER, longLat });
        setTimeout(() => {
            dispatch({ type: ACTIONS.ADD_MARKER_SUCCESS });
            dispatch({ type: ACTIONS.TOGGLE_MARKER_MODAL });
        }, 3000);
    };
}

export function toggleMarkerModal(e) {
    console.log(e);
    return { type: ACTIONS.TOGGLE_MARKER_MODAL, event: e };
}