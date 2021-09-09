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
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        DOB: "",
    })



    useEffect(() => {
        props.getEmployeeDetails(id)

        const { firstName, lastName, email, mobileNumber, DOB } = props.emp || {}

        setData({
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobileNumber: mobileNumber,
            DOB: DOB
        })
    }, [props.emp])

    const handleEdit = () => {
        let newData = Object.assign(props.emp, data)

        dispatch(editEmployee(newData))
        console.log(newData, "newData")
        history.push("/")

    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <h4>Edit Employee details having id : {id}</h4>

            <form style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-end', margin: 20 }} onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name="firtsName" value={data.firstName} onChange={(e) => setData({ ...data, firstName: e.target.value })} />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={data.lastName} onChange={(e) => setData({ ...data, lastName: e.target.value })} />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                </label>
                <label>
                    Phone Number:
                    <input type="text" name="mobileNumber" value={data.mobileNumber} onChange={(e) => setData({ ...data, mobileNumber: e.target.value })} />
                </label>
                <label>
                    DOB:
                    <input type="text" name="DOB" value={data.DOB} onChange={(e) => setData({ ...data, DOB: e.target.value })} />
                </label>

                <Button variant="success" onClick={handleEdit}>Update</Button>

            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        emp: state.emp
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        getEmployeeDetails: (id) => { dispatch(infoEmployee(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);
