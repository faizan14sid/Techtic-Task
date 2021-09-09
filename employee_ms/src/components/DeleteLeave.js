import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteLeave } from '../redux/action'


const DeleteLeave = ({ subList, id }) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Delete
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to delete this?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            dispatch(deleteLeave(subList, id))
                            handleClose()
                        }
                        }>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteLeave
