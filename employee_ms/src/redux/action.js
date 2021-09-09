export const addEmployee = (data) => {
    return {
        type: 'ADD_EMP',
        payload: data
    }
}
export const deleteEmployee = (id) => {
    return {
        type: 'DELETE_EMP',
        payload: id
    }
}
export const infoEmployee = (id) => {
    return {
        type: 'INFO_EMP',
        payload: id
    }
}
export const editEmployee = (newData) => {
    return {
        type: 'EDIT_EMP',
        payload: newData
    }
}

export const addLeave = (data, id) => {
    return {
        type: 'ADD_LEAVE',
        payload: { data, id }
    }
}

export const deleteLeave = (id) => {
    return {
        type: 'DELETE_LEAVE',
        payload: id
    }
}