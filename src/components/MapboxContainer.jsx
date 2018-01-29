import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators';
import { AddMarkerModal } from './';

class UnmappedMapboxContainer extends Component {
    constructor() {
        super();
        this.token = 'pk.eyJ1IjoibGV2ZW5zb25qIiwiYSI6ImNqY3c2emk4dDBkaTcyeG4yNzVtNXpsanMifQ.MhkQq2XlVvahW3vOAyzXhg';
        this.state = { 
            mapSettings: {
                latitude: 40.7128,
                longitude: -74.0060,
                zoom: 12
            }
        };
    }

    render() {
        const { map, addMarker, toggleMarkerModal } = this.props;
        
        return (
            <div>
                { !!map.tempLongLat && <AddMarkerModal 
                    show={ map.showMarkerModal } 
                    tempLongLat= { map.tempLongLat } 
                    isLoading={ map.isMarkerLoading }
                    onToggle={ toggleMarkerModal }
                    onAdd={ addMarker } /> }
                <ReactMapGL { ...this.state.mapSettings }
                    dragPan
                    onClick={toggleMarkerModal}
                    mapboxApiAccessToken={this.token}
                    height={500}
                    width={800}
                    onViewportChange={(viewport) => {
                        this.setState({mapSettings: viewport});
                    }}>
                    { (map.markers || []).map((m, i) => 
                        <Marker key={i} longitude={m.long} offsetTop={-10} offsetLeft={-10} latitude={m.lat}>
                            <i className='fas text-danger fa-exclamation-circle' />
                        </Marker>) 
                    }
                </ReactMapGL>
            </div>
        )
    }
}

export const MapboxContainer = connect(
     state => ({ map: state.mapReducer }), 
     dispatch => bindActionCreators(actionCreators, dispatch)
)(UnmappedMapboxContainer);