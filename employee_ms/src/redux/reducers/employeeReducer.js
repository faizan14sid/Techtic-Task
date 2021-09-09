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

            return {
                ...state,
                items: state.items.filter((emp) => emp.id !== action.payload.id ? action.payload : emp)
            }

        case "ADD_LEAVE":
            console.log("leave", action.payload)
            // let selectedEmp = state.items.filter((emp) => emp.id == action.payload.id)
            return {
                ...state,
                items: [...state.items.map((emp) => emp.id == action.payload.id ? { ...emp.leaveDate, leaveDate: action.payload } : emp.leaves)]
            }
        case "DELETE_LEAVE":
            console.log(action.payload, "delete")
            return {
                ...state,
                items: { ...state.items, leaves: { ...state.items.leaves.filter((emp) => emp.id !== action.payload) } }
            }
        default:
            return state
    }


}


export default employeeReducer;