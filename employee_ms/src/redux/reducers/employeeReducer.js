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
                items: state.items.filter((emp) => emp.id !== action.payload)
            }
        case "INFO_EMP":
            let employee = state.items.filter((emp) => emp.id == action.payload)
            return {
                ...state,
                emp: (employee.length > 0) ? employee[0] : {}
            }
        case "EDIT_EMP":
            console.log("yes", action.payload)
            return {
                ...state,
                items: state.items.filter((emp) => emp.id !== action.payload.id ? action.payload : emp)
            }
        default:
            return state
    }
}

export default employeeReducer;