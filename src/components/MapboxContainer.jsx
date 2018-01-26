import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

export class MapboxContainer extends Component {
    constructor() {
        super();
        this.token = 'pk.eyJ1IjoibGV2ZW5zb25qIiwiYSI6ImNqY3c2emk4dDBkaTcyeG4yNzVtNXpsanMifQ.MhkQq2XlVvahW3vOAyzXhg';
        this.state = {
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8 
        };
    }

    render() {
        return (
            <div>
                <ReactMapGL { ...this.state }
                    dragPan
                    mapboxApiAccessToken={this.token}
                    width={500} 
                    height={500}
                    onViewportChange={(viewport) => {
                        this.setState(viewport);
                    }} />
            </div>
        )
    }
}