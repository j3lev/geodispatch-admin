import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connectToDispatchServer } from '../api';
import * as actionCreators from '../actionCreators';

export class UnmappedSocketContainer extends Component {

    componentDidMount () {
        this.socket = connectToDispatchServer();
        
        this.socket.on('connect', () => {
            this.props.handleConnectEstablished();
        });
        this.socket.on('connect_error', () => {
            this.props.handleConnectErr();
        });
    }

    componentWillUnmount() {
        this.socket.close();
    }
    
    render() {
        return this.props.children;        
    }
}

export const SocketContainer = connect(
    null,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(UnmappedSocketContainer);
