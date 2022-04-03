import React from 'react'
import { Grid, TextField } from '@mui/material'

export const createInvoiceFieldsList = [
    'UBLID',
    'CustomizationID',
    'ProfileID',
    'ID',
    'IssueDate',
    'InvoiceCode',
    'Currency',
    'BuyerReference',
    'AddDocReference',
    'SupplierID',
    'SupplierStreet',
    'SupplierCity',
    'SupplierPost',
    'SupplierCountry',
    'SupplierRegistration',
    'CustomerStreet',
    'CustomerAddStreet',
    'CustomerCity',
    'CustomerPost',
    'CustomerCountry',
    'CustomerRegistration',
    'PaymentType',
    'PaymentID',
    'PaymentTerms',
    'TaxAmount',
    'TaxableAmount',
    'TaxSubtotalAmount',
    'TaxID',
    'TaxPercent',
    'TaxSchemeID',
    'LegalLineExtension',
    'TaxExclusiveAmount',
    'TaxInclusiveAmount',
    'PayableRoundingAmount',
    'PayableAmount',
    'InvoiceID',
    'InvoiceQuantity',
    'InvoiceLineExtension',
    'InvoiceName',
    'InvoiceTaxID',
    'InvoiceTaxPercent',
    'InvoiceTaxSchemeID',
    'InvoicePriceAmount',
    'InvoiceBaseQuantity',
]

export const CreateInvoiceItems = () => {
    return (
        <div>
            <Grid container spacing={2}>
                {createInvoiceFieldsList.map((field) => (
                    <Grid item xs={3}>
                        <TextField required noValidate fullWidth name={field} label={field} id={field} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}