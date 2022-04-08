import React from 'react'
import { Divider, Grid, TextField } from '@mui/material'

export const createInvoiceFieldsList = [
    { defaultValue: "", field: 'UBLID' },
    { defaultValue: "", field: 'CustomizationID' },
    { defaultValue: "", field: 'ProfileID' },
    { defaultValue: "", field: 'ID' },
    { defaultValue: "", field: 'IssueDate' },
    { defaultValue: "", field: 'InvoiceCode' },
    { defaultValue: "", field: 'Currency' },
    { defaultValue: "", field: 'BuyerReference' },
    { defaultValue: "", field: 'AddDocReference' },
    { defaultValue: "", field: 'SupplierID' },
    { defaultValue: "", field: 'SupplierStreet' },
    { defaultValue: "", field: 'SupplierCity' },
    { defaultValue: "", field: 'SupplierPost' },
    { defaultValue: "", field: 'SupplierCountry' },
    { defaultValue: "", field: 'SupplierRegistration' },
    { defaultValue: "", field: 'CustomerStreet' },
    { defaultValue: "", field: 'CustomerAddStreet' },
    { defaultValue: "", field: 'CustomerCity' },
    { defaultValue: "", field: 'CustomerPost' },
    { defaultValue: "", field: 'CustomerCountry' },
    { defaultValue: "", field: 'CustomerRegistration' },
    { defaultValue: "", field: 'PaymentType' },
    { defaultValue: "", field: 'PaymentID' },
    { defaultValue: "", field: 'PaymentTerms' },
    { defaultValue: "", field: 'TaxAmount' },
    { defaultValue: "", field: 'TaxableAmount' },
    { defaultValue: "", field: 'TaxSubtotalAmount' },
    { defaultValue: "", field: 'TaxID' },
    { defaultValue: "", field: 'TaxPercent' },
    { defaultValue: "", field: 'TaxSchemeID' },
    { defaultValue: "", field: 'LegalLineExtension' },
    { defaultValue: "", field: 'TaxExclusiveAmount' },
    { defaultValue: "", field: 'TaxInclusiveAmount' },
    { defaultValue: "", field: 'PayableRoundingAmount' },
    { defaultValue: "", field: 'PayableAmount' },
    { defaultValue: "", field: 'InvoiceID' },
    { defaultValue: "", field: 'InvoiceQuantity' },
    { defaultValue: "", field: 'InvoiceLineExtension' },
    { defaultValue: "", field: 'InvoiceName' },
    { defaultValue: "", field: 'InvoiceTaxID' },
    { defaultValue: "", field: 'InvoiceTaxPercent' },
    { defaultValue: "", field: 'InvoiceTaxSchemeID' },
    { defaultValue: "", field: 'InvoicePriceAmount' },
    { defaultValue: "", field: 'InvoiceBaseQuantity' },
]

export const CreateInvoiceItems = () => {
    return (
        <div>
            <Grid container spacing={2}>
                {createInvoiceFieldsList.map((form_obj, idx) => (
                    <>
                        {form_obj.newSection === "" ? <></> : (
                            <div>
                                <Grid item xs={2}>
                                    <Divider orientation="vertical" flexItem />
                                </Grid>
                                <h1>{form_obj.newSection}</h1>
                            </div>
                        )}
                        <Grid item xs={6} sm={3} key={idx}>
                            <TextField fullWidth name={form_obj.field} label={form_obj.field} id={form_obj.field} />
                        </Grid>
                    </>
                ))}
            </Grid>
        </div>
    )
}