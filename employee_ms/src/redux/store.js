import { createStore } from 'redux';
import employeeReducer from './reducers/employeeReducer';

const employeeData = {

    items: [{
        firstName: "Rohit", lastName: "kumar", email: "rohit13@gmail.com", mobileNumber: "8563256592", DOB: "1995-08-06", id: 1, leaves: ["2021-10-14", "2021-11-20"]
    },
    {
        firstName: "Suraj", lastName: "Sharma", email: "suraj10@gmail.com", mobileNumber: "9563256552", DOB: "1998-04-15", id: 2, leaves: ["2022-05-18", "2021-08-25"]
    }]

}

const store = createStore(employeeReducer, employeeData)

export default store;