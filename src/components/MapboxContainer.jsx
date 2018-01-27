import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

export class MapboxContainer extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.token = 'pk.eyJ1IjoibGV2ZW5zb25qIiwiYSI6ImNqY3c2emk4dDBkaTcyeG4yNzVtNXpsanMifQ.MhkQq2XlVvahW3vOAyzXhg';
        this.state = { 
            mapSettings: {
                latitude: 40.7128,
                longitude: -74.0060,
                zoom: 12 
            }
        };
    }

    handleClick(e) {
        console.log(e);
        this.setState({ markers: [...(this.state.markers || {}), { long: e.lngLat[0], lat: e.lngLat[1] }] });
    }

    render() {
        const markers = this.state.markers || [];
        console.log(markers);
        return (
            <div>
                <ReactMapGL { ...this.state.mapSettings }
                    dragPan
                    onClick={this.handleClick}
                    mapboxApiAccessToken={this.token}
                    height={500}
                    width={800}
                    onViewportChange={(viewport) => {
                        this.setState({mapSettings: viewport});
                    }}>
                    { markers.map((m, i) => <Marker key={i} longitude={m.long} latitude={m.lat}><i className='fas fa-exclamation-circle' /></Marker>) }
                </ReactMapGL>
            </div>
        )
    }
}