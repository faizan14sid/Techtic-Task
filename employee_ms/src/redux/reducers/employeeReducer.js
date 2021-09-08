const employeeReducer = (state = "", action) => {

    switch (action.type) {
        case "ADD_EMP":

            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case "DELETE_EMP":

            return {
                ...state,
                items: state.items.filter((employee) => employee.id !== action.payload)
            }
        case "INFO_EMP":
            let empDetails = state.items.filter((employee) => employee.id == action.payload)
            return {
                ...state,
                emp: (empDetails.length > 0) ? empDetails[0] : {}
            }
        case "EDIT_EMP":
            return {
                ...state,
                items: state.items.filter((employee) => employee.id !== action.payload.id ? action.payload : employee)
            }
        default:
            return state
    }
}

export default employeeReducer;