import { ACTIONS } from '../constants';

export const mapReducer = (
    state = { markers: [], tempLongLat: null }, 
    action
) => {
    switch (action.type) {
        case ACTIONS.TOGGLE_MARKER_MODAL:
            return { ...state, showMarkerModal: !state.showMarkerModal, tempLongLat: action.longLat };
        case ACTIONS.ADD_MARKER: {
            let markers = [...state.markers];
            markers.push({ longLat: action.longLat });
            return { ...state, markers };
        }
        case ACTIONS.ADD_MARKER_SUCCESS: {
            let markers = state.markers.map(m => {
                if (m.longLat[0] === action.longLat[0] && m.longLat[1] === action.longLat[1]) {
                    return { ...m, isPublished: true };
                }
                return m;
            });
            return { ...state, markers };
        }
        default:
            return state;
    }
}