import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actionCreators';

export class UnmappedSocketContainer extends Component {

    componentDidMount () {
        this.props.initializeSocket();
    }

    componentWillUnmount() {
        this.props.closeSocket();
    }
    
    render() {
        return this.props.children;        
    }
}

export const SocketContainer = connect(
    null,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(UnmappedSocketContainer);
