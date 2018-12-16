export const createInvoice = invoice => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        // TODO add invoice here
        firestore.collection('invoices').add({
            ...invoice,
            createdAt: new Date(),
            updatedAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_invoice_SUCCESS',
                invoice: invoice
            })
        }).catch((err) => {
            dispatch({ type: 'CREATE_invoice_ERROR', err })
        })
    }
}

export const deleteInvoice = invId => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        // TODO delete invoice here
        firestore.collection('invoices').doc(invId).delete().then(() => {
            dispatch({
                type: 'DELETE_invoice_SUCCESS',
                invId: invId 
            })
        }).catch((err) => {
            dispatch({ type: 'DELETE_invoice_ERROR', err })
        })
    }
}

export const updateInvoice = invoice => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        // TODO update invoice here
        firestore.collection('invoices').doc(invoice.id).update({
            ...invoice,
            updatedAt: new Date()
        }).then(() => {
            dispatch({
                type: 'UPDATE_invoice_SUCCESS',
                invoice: invoice 
            })
        }).catch((err) => {
            dispatch({ type: 'UPDATE_invoice_ERROR', err })
        })
    }
}