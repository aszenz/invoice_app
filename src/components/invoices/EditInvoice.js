import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { withRouter } from "react-router";
import { updateInvoice } from '../../store/actions/invoiceActions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'

class EditInvoice extends Component {
    invoice = this.props.invoice
    handleChange = e => {
        this.invoice[e.target.id] = e.target.value
        this.setState({
            ...this.invoice
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log('current state on submit ', this.state)
        // TODO store state data in db
        this.props.updateInvoice(this.invoice)
        this.props.history.push('/')
    }
    render() {
        if (this.invoice) {
            return (
                <div>
                    <br />
                    <Typography variant="h6" color="inherit">
                        Update invoice
                    </Typography>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            id="inv_no"
                            label="Invoice number"
                            value={this.invoice.inv_no}
                            margin="normal"
                            onChange={this.handleChange}
                        />
                        <br />
                        <TextField
                            id="address"
                            label="Address"
                            value={this.invoice.address}
                            margin="normal"
                            onChange={this.handleChange}
                        />
                        <br />
                        <TextField
                            id="date"
                            label="Date"
                            value={this.invoice.date}
                            margin="normal"
                            onChange={this.handleChange}
                        />
                        <br />
                        <TextField
                            id="goods"
                            label="Goods"
                            value={this.invoice.goods}
                            margin="normal"
                            onChange={this.handleChange}
                        />
                        <br />
                        <br />
                        <Button type="submit" variant="contained" color="primary">Update</Button>
                    </form>
                </div >
            )
        }
        else {
            return (
                <Typography variant="h6" color="inherit">
                    Error
                </Typography>
            )
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    const invId = ownProps.match.params.id
    const allInvoices = state.firestore.data.invoices
    // console.log(allInvoices)
    let invWithThisId = allInvoices ? allInvoices[invId] : null
    invWithThisId.id = invId
    console.log('invWithThisId', invWithThisId)
    return {
        invoice: invWithThisId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateInvoice: (invoice) => dispatch(updateInvoice(invoice))
    }
}
export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'invoices' }
    ]),
)(EditInvoice)