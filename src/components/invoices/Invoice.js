import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { deleteInvoice } from '../../store/actions/invoiceActions'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Invoice extends Component {
    id = this.props.inv_details.id
    handleSubmit = e => {
        e.preventDefault()
        // TODO delete data in db
        this.props.deleteInvoice(this.id)
    }
    render() {
        const { inv_details } = this.props
        return (
            <div>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Invoice number: {inv_details.inv_no}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            {inv_details.id}
                        </Typography>
                        <Typography component="p">
                            Address: {inv_details.address}
                        </Typography>
                        <Typography component="p">
                            Date: {inv_details.date}
                        </Typography>
                        <Typography>
                            Goods: {inv_details.goods}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button type="submit" size="small" component={Link} to={'/invoice/' + inv_details.id} color="primary">
                            Edit
                        </Button>
                        <form onSubmit={this.handleSubmit}>
                            <Button type="submit" size="small" color="secondary">
                                Delete
                            </Button>
                        </form>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteInvoice: (invId) => dispatch(deleteInvoice(invId))
    }
}
export default compose(
    withRouter,
    connect(null, mapDispatchToProps),
    firestoreConnect([
        { collection: 'invoices' }
    ]),
)(Invoice)