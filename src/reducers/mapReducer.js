import { ACTIONS } from '../constants';

export const mapReducer = (
    state = { markers: [], tempLongLat: null }, 
    action
) => {
    switch (action.type) {
        case ACTIONS.TOGGLE_MARKER_MODAL:
            return { ...state, showMarkerModal: !state.showMarkerModal, tempLongLat: action.event && action.event.lngLat };
        case ACTIONS.ADD_MARKER:
            return { ...state, isMarkerLoading: true };
        case ACTIONS.ADD_MARKER_SUCCESS:
            return {
                ...state, 
                markers: [...(state.markers || []), { long: state.tempLongLat[0], lat: state.tempLongLat[1] }],
                tempLongLat: null,
                isMarkerLoading: false
            };
        default:
            return state;
    }
}