import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, connect } from 'react-redux'
import { addEmployee } from '../redux/action'
import { useHistory } from 'react-router-dom'

const AddEmployee = ({ items }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        DOB: "",
        id: ""
    })

    const { firstName, lastName, email, mobileNumber, DOB, id } = data

    const handleAdd = () => {

        const checkEmailExists = items.filter((emp) =>
            emp.email === email ? emp : null
        );
        const checkPhoneExists = items.filter((emp) =>
            emp.mobileNumber === mobileNumber ? emp : null
        );

        if (!email || !firstName || !lastName || !DOB || !mobileNumber) {
            return alert("Please fill all the fields!!");
        }
        if (checkEmailExists.length > 0) {
            return alert("This email already exists!!");
        }
        if (checkPhoneExists.length > 0) {
            return alert("This phone number already exists!!");
        }


        dispatch(addEmployee(data))
        history.push("/")

    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <h4>Add Employee Here</h4>
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
                <label>
                    id:
                    <input type="text" name="id" value={id} onChange={(e) => setData({ ...data, id: e.target.value })} />
                </label>

                <Button variant="success" onClick={handleAdd}>Add</Button>

            </form>
        </div>
    )
}
const mapStateToProps = (state) => ({
    items: state.items
});

export default connect(mapStateToProps)(AddEmployee)
