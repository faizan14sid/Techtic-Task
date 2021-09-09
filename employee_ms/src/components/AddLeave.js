import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import { Modal, Button, Form, NavItem } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addLeave } from '../redux/action';

const AddLeave = ({ list }) => {
    const [data, setData] = useState("")
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleConfirm = () => {
        const checkLeavesExists = list.leaves.filter((leave) =>
            leave === data ? leave : null
        );
        if (checkLeavesExists.length > 0) {
            return alert("You already take this date leave!!");
        }

        const { id } = list;
        dispatch(addLeave(data, id))
        setShow(false)
    }

    return (
        <>
            <Button variant="outline-warning" onClick={handleShow}>
                Add Leave
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Select date for leave </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <Form.Label>Select Date</Form.Label>
                        <Form.Control type="date" value={data} onChange={(e) => setData(e.target.value)} />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleConfirm}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddLeave
