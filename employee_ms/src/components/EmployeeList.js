import React, { useState } from 'react'
import { Table, Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../redux/action';



const EmployeeList = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const employeeList = useSelector((state) => {
        return state.items;
    
    })

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>D.O.B</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map((list, index) => {
                        return (
                            <tr key={list.id}>
                                <td>{index + 1}</td>
                                <td>{list.firstName}</td>
                                <td>{list.lastName}</td>
                                <td>{list.email}</td>
                                <td>{list.mobileNumber}</td>
                                <td>{list.DOB}</td>
                                <td>
                                    <Link to={`/edit-employee/${list.id}`} > <Button variant="primary">Edit</Button> </Link>

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
                                                    dispatch(deleteEmployee(list.id))
                                                    handleClose()
                                                }
                                                }>
                                                Confirm
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        </div >
    )
}

export default EmployeeList;