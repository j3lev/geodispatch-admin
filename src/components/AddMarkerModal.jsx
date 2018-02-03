import React from 'react';
import { Modal, ModalBody, ModalFooter, Button, ModalHeader } from 'reactstrap';

export const AddMarkerModal = (props) => {
    return (
        <Modal fade={false} isOpen={ props.show }>
            <ModalHeader><i className='fas fa-props-marker-alt' /> Add marker</ModalHeader>
            <ModalBody><p>Add a marker at {props.tempLongLat[0]}, {props.tempLongLat[1]}?</p></ModalBody>
            <ModalFooter>
                <Button outline color='danger' onClick={ props.onMarkerAdd }>
                    { !props.isLoading && <span><i className='fas fa-plus' /> Add</span> }
                </Button>
                { !props.isLoading && <Button color='link' onClick={ props.onToggle }>
                    <i className='fas fa-times' /> Cancel
                </Button> }
            </ModalFooter>
        </Modal>
    );
}