import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actionCreators';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';


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
                { !!map.tempLongLat && <Modal isOpen={ map.showMarkerModal }>
                    <ModalHeader><i className='fas fa-map-marker-alt' /> Add marker</ModalHeader>
                    <ModalBody><p>Add a marker at {map.tempLongLat[0]}, {map.tempLongLat[1]}?</p></ModalBody>
                    <ModalFooter>
                        <Button onClick={ addMarker }><i className='fas fa-plus' /> Add Marker</Button>
                        <Button onClick={ toggleMarkerModal }><i className='fas fa-times' /> Cancel</Button>
                    </ModalFooter>
                </Modal> }
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