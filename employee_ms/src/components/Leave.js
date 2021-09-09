import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import { Modal, Button, Table } from 'react-bootstrap';
import AddLeave from './AddLeave';
import { useDispatch } from 'react-redux';
import { deleteLeave } from '../redux/action'



const Leave = ({ list }) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-warning" onClick={handleShow}>
                Check
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Leave Status : {list.firstName} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddLeave list={list} />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Leave Dates</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {list.leaves && list.leaves.map((subList) => {
                                return (
                                    <tr>
                                        <td>{subList.leaveDate}</td>
                                        <td><Button variant="danger" onClick={() => dispatch(deleteLeave(subList.id))}>Delete</Button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Leave
