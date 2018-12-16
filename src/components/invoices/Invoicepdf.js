import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { PDFDownloadLink, Page, Link, Image, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer'

// To generate the pdf `@react-pdf/rendered` library is use, it supports custom styling using css and 
// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#FFF'
    },
    invoice_heading: {
        padding: 5
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }

})

class Invoicepdf extends Component {
    invoice = this.props.invoice
    // Create the invoice
    invoiceDoc() {
        // TODO: Style the invoice
        return (
            <Document title="Invoice" author="asrar">
                <Page size="A4">
                    <View style={styles.invoice_heading}>
                        <Text>Yarikul Infotech Invoice</Text>
                        <Link src="https://www.yarikul.com/">Yarikul</Link>
                    </View>
                    <View style={styles.section}>
                        <Text>Invoice No: {this.invoice.inv_no}</Text>
                        <Text>Date: {this.invoice.date}</Text>
                        <Text>Address: {this.invoice.address}</Text>
                        <Text>Goods: {this.invoice.goods}</Text>
                    </View>
                </Page>
            </Document>
        )
    }

    state = {
        email_reciever: ''
    }
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    // TODO: Implement email sending logic here
    emailInvoice(e){
        e.preventDefault()
        alert('Pending implementation')
    }
    render() {
        if (this.invoice) {
            return (
                <div>
                    <br />
                    {/*show pdf document and download button*/}
                    <PDFViewer>
                        {this.invoiceDoc()}
                    </PDFViewer>
                    <br />
                    <PDFDownloadLink document={this.invoiceDoc()} fileName="invoice.pdf">
                        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <Button variant="container" color="primary">Download Invoice Pdf</Button>)}
                    </PDFDownloadLink>

                    <br />
                    <br />

                    <Typography variant="h6" color="inherit">
                        Email this invoice
                    </Typography>
                    <form onSubmit={this.emailInvoice}>
                        <TextField
                            id="email_reciever"
                            label="Email To"
                            defaultValue=""
                            margin="normal"
                            onChange={this.handleChange}
                        />
                        <br />
                        <Button type="submit" variant="contained" color="secondary">Email Invoice</Button>
                    </form>
                    <br />
                    <br />
                </div>
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
    console.log('state:', state)
    console.log('ownprops:', ownProps)
    const invId = ownProps.match.params.id
    const allInvoices = state.firestore.data.invoices
    console.log(allInvoices)
    let invWithThisId = allInvoices ? allInvoices[invId] : null
    invWithThisId.id = invId
    console.log('invWithThisId', invWithThisId)
    return {
        invoice: invWithThisId
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'invoices' }
    ]),
)(Invoicepdf)