import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux'
import { editEmployee, infoEmployee } from '../redux/action'
import { useHistory, useParams } from 'react-router-dom'



const EditEmployee = (props) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        DOB: "",
        id: ""
    })

    const { firstName, lastName, email, mobileNumber, DOB } = data;

    useEffect(() => {
        props.getEmployeeDetails(id)

    }, [setData, props.myEmp])


    useEffect(() => {
        if (data.firstName == "") {
            const { firstName, lastName, email, mobileNumber, DOB } = props.myEmp
            setData({
                firstName: firstName,
                lastName: lastName,
                email: email,
                mobileNumber: mobileNumber,
                DOB: DOB
            })

        }
    }, [id, setData])

    const handleEdit = () => {
        dispatch(editEmployee(data))
        console.log(data)
        history.push("/")

    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <h4>Edit Employee details {id}</h4>

            <form style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-end', margin: 20 }} onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name="firtsName" value={firstName} onChange={(e) => setData({ ...data, firstName: e.target.value })} />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={lastName} onChange={(e) => setData({ ...data, lastName: e.target.value })} />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" value={email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                </label>
                <label>
                    Phone Number:
                    <input type="text" name="mobileNumber" value={mobileNumber} onChange={(e) => setData({ ...data, mobileNumber: e.target.value })} />
                </label>
                <label>
                    DOB:
                    <input type="text" name="DOB" value={DOB} onChange={(e) => setData({ ...data, DOB: e.target.value })} />
                </label>

                <Button variant="success" onClick={handleEdit}>Update</Button>

            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myEmp: state.emp

    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        getEmployeeDetails: (id) => { dispatch(infoEmployee(id)) },
        updateEmployee: (data) => { dispatch(editEmployee(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);
