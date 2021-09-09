import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import { Modal, Button, Table } from 'react-bootstrap';
import AddLeave from './AddLeave';
import DeleteLeave from './DeleteLeave';



const Leave = ({ list }) => {

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
                                        <td>{subList}</td>
                                        <td><DeleteLeave subList={subList} id={list.id} /></td>
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

export default Leave;
