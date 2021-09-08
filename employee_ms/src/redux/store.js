import { createStore } from 'redux';
import employeeReducer from './reducers/employeeReducer';

const employeeData = {
    employee: {
        details: [{
            firstName: "Rohit", lastName: "kumar", Email: "rohit13@gmail.com", mobileNumber: "8563256592", DOB: "14/03/1995", id: 1
        },
        {
            firstName: "Suraj", lastName: "Sharma", Email: "suraj10@gmail.com", mobileNumber: "9563256552", DOB: "05/08/1992", id: 2
        }]
    }
}

const store = createStore(employeeReducer, employeeData)

export default store;