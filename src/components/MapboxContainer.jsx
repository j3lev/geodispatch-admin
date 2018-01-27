import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';

export class MapboxContainer extends Component {
    constructor() {
        super();
        this.addMarker = this.addMarker.bind(this);
        this.toggleMarkerModal = this.toggleMarkerModal.bind(this);
        this.token = 'pk.eyJ1IjoibGV2ZW5zb25qIiwiYSI6ImNqY3c2emk4dDBkaTcyeG4yNzVtNXpsanMifQ.MhkQq2XlVvahW3vOAyzXhg';
        this.state = { 
            mapSettings: {
                latitude: 40.7128,
                longitude: -74.0060,
                zoom: 12
            },
            tempLongLat: null,
            showMarkerModal: false
        };
    }

    toggleMarkerModal(e) {
        this.setState({ showMarkerModal: !this.state.showMarkerModal, tempLongLat: e && e.lngLat });
    }

    addMarker() {
        this.toggleMarkerModal();
        this.setState({
            markers: [...(this.state.markers || {}), { long: this.state.tempLongLat[0], lat: this.state.tempLongLat[1] }],
            tempLongLat: null
        });
    }

    render() {
        const { markers, tempLongLat } = this.state;
        return (
            <div>
                { !!tempLongLat && <Modal isOpen={ this.state.showMarkerModal }>
                    <ModalHeader><i className='fas fa-map-marker-alt' /> Add marker</ModalHeader>
                    <ModalBody><p>Add a marker at {tempLongLat[0]}, {tempLongLat[1]}?</p></ModalBody>
                    <ModalFooter>
                        <Button onClick={ this.addMarker }><i className='fas fa-plus' /> Add Marker</Button>
                        <Button onClick={ this.toggleMarkerModal }><i className='fas fa-times' /> Cancel</Button>
                    </ModalFooter>
                </Modal> }
                <ReactMapGL { ...this.state.mapSettings }
                    dragPan
                    onClick={this.toggleMarkerModal}
                    mapboxApiAccessToken={this.token}
                    height={500}
                    width={800}
                    onViewportChange={(viewport) => {
                        this.setState({mapSettings: viewport});
                    }}>
                    { (markers || []).map((m, i) => 
                        <Marker key={i} longitude={m.long} offsetTop={-10} offsetLeft={-10} latitude={m.lat}>
                            <i className='fas text-danger fa-exclamation-circle' />
                        </Marker>) 
                    }
                </ReactMapGL>
            </div>
        )
    }
}