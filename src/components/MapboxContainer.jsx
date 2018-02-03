import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators';
import beacon from '../assets/beacon.svg';
import rings from '../assets/rings.svg';
import { AddMarkerModal } from './';
import { Alert, Fade } from 'reactstrap';

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
        this.onMarkerAdd = this.onMarkerAdd.bind(this);
    }

    onMarkerAdd() {
        this.props.addMarker(this.props.map.tempLongLat);
        this.props.toggleMarkerModal();
    }

    render() {
        const { map, addMarker, toggleMarkerModal, connection } = this.props;
        return (
            <div>
                { connection.err && <Alert color='danger'>Connection Error</Alert> }
                { connection.active && <Alert color='success'>Connection active</Alert> }
                { !!map.tempLongLat && <AddMarkerModal 
                    show={ map.showMarkerModal } 
                    tempLongLat= { map.tempLongLat } 
                    isLoading={ map.isMarkerLoading }
                    onToggle={ toggleMarkerModal }
                    onMarkerAdd={ this.onMarkerAdd } /> }
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
                        <Marker key={i} longitude={m.longLat[0]} offsetTop={-32} offsetLeft={-33} latitude={m.longLat[1]}>
                            <img className='no-select' draggable="false" src={ m.isPublished ? beacon : rings } />
                        </Marker>
                    )}
                </ReactMapGL>
            </div>
        )
    }
}

export const MapboxContainer = connect(
    state => ({ 
        map: state.mapReducer,
        connection: state.connectionReducer
    }), 
    dispatch => bindActionCreators(actionCreators, dispatch)
)(UnmappedMapboxContainer);