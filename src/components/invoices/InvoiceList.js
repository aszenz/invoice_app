import React from 'react'
import Invoice from './Invoice'
const InvoiceList = ({ invoices }) => {
    return (
        <div className="inv-list">
            {invoices && invoices.map(inv => {
                return (
                    <div key={inv.id}>
                        <br />
                        <Invoice inv_details={inv} />
                        <br />
                    </div>
                )
            })}
        </div>
    )
}
export default InvoiceList