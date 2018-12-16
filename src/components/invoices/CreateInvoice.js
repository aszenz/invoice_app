import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import { createInvoice } from '../../store/actions/invoiceActions'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    bt_create: {
        margin: theme.spacing.unit,
        padding: '10'
    },
    input: {
        display: 'none',
    },
});

class CreateInvoice extends Component {
    state = {
        inv_no: '',
        address: '',
        date: '',
        goods: ''
    }
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        // console.log(this.state)
        // TODO store state data in db
        this.props.createInvoice(this.state)
        this.props.history.push({
        pathname: '/',
        })
    }
    render() {
        return (
            <div>
                <br />
                <Typography variant="h6" color="inherit">
                    Create new invoice
                </Typography>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="inv_no"
                        label="Invoice number"
                        defaultValue=""
                        margin="normal"
                        onChange={this.handleChange}
                    />
                    <br />
                    <TextField
                        id="address"
                        label="Address"
                        defaultValue=""
                        margin="normal"
                        onChange={this.handleChange}
                    />
                    <br />
                    <TextField
                        id="date"
                        label="Date"
                        defaultValue=""
                        margin="normal"
                        onChange={this.handleChange}
                    />
                    <br />
                    <TextField
                        id="goods"
                        label="Goods"
                        defaultValue=""
                        margin="normal"
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <Button type="submit" variant="contained" color="primary" className="bt_create">Create</Button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        createInvoice: (invoice) => dispatch(createInvoice(invoice))
    }
}
export default compose(
    withStyles(styles),
    withRouter,
    connect(null, mapDispatchToProps)
)(CreateInvoice)