import React from 'react'
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const EmployeeList = () => {

    const employeeList = useSelector((state) => {
        return state.employee.details;
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
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map((list, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{list.firstName}</td>
                                <td>{list.lastName}</td>
                                <td>{list.Email}</td>
                                <td>{list.mobileNumber}</td>
                                <td>{list.DOB}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        </div>
    )
}

export default EmployeeList;