import React from 'react'
import { Button } from 'react-bootstrap';
import EmployeeList from './EmployeeList';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to="/add-employee">
                <Button variant="success">Add Employee</Button>
            </Link>
            <EmployeeList />
        </div>
    )
}

export default Home

