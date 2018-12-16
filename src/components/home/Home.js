import React, { Component } from 'react'
import { connect } from 'react-redux'
import InvoiceList from '../invoices/InvoiceList'
import { getFirestore } from 'redux-firestore'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Home extends Component {

    componentWillMount() {
        getFirestore().setListener({ collection: 'invoices', orderBy: ['createdAt', 'desc'] })
    }
    componentWillUnmount() {
        getFirestore().unsetListener({ collection: 'invoices', orderBy: ['createdAt', 'desc'] })
    }

    render() {
        const { invoices } = this.props
        return (
            <div>
                <InvoiceList invoices={invoices} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return ({
        invoices: state.firestore.ordered.invoices
    })
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'invoices', orderBy: ['createdAt', 'desc'] }
    ])
)(Home)