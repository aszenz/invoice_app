const initState = {
}

// TODO: show errors to users and use actions for updating state
const invoiceReducer = (state = initState, action) => {
    switch (action.type) {
    case 'CREATE_invoice_SUCCESS':
        console.log('create invoice success\n state=', state)
        return state
    case 'CREATE_invoice_ERROR':
        console.log('create invoice error\n state=', state)
        return state
    case 'UPDATE_invoice_SUCCESS':
        console.log('update invoice success\n state=', state)
        return state
    case 'UPDATE_invoice_ERROR':
        console.log('update invoice error\n state=', state)
        return state
    case 'DELETE_invoice_SUCCESS':
        console.log('delete invoice success\n state=', state)
        return state
    case 'DELETE_invoice_ERROR':
        console.log('delete invoice error\n state=', state)
        return state
    default:
        return state
    }
}
export default invoiceReducer