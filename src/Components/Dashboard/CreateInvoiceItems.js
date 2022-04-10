import React from 'react'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Divider,
    Grid,
    TextField,
    Typography,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import { statsSmall } from './styles'

export const createInvoiceFieldDetails = [
    {
        title: 'Invoice Identification',
        fields: [
            { fieldSize: 2, defaultValue: '', field: 'InvoiceID' },
            { fieldSize: 2, defaultValue: '', field: 'ID' },
            { fieldSize: 2, defaultValue: '', field: 'InvoiceTaxSchemeID' },
            { fieldSize: 12, defaultValue: '', field: 'InvoiceName' },
            { fieldSize: 12, defaultValue: '', field: 'IssueDate' },
        ],
    },
    {
        title: 'Payment Details and Costs',
        fields: [
            { fieldSize: 2, defaultValue: '', field: 'PayableAmount' },
            { fieldSize: 2, defaultValue: '', field: 'InvoicePriceAmount' },
            { fieldSize: 2, defaultValue: '', field: 'InvoiceLineExtension' },
            { fieldSize: 2, defaultValue: '', field: 'LegalLineExtension' },
            { fieldSize: 2, defaultValue: '', field: 'InvoiceQuantity' },
            { fieldSize: 2, defaultValue: '', field: 'InvoiceBaseQuantity' },
            { fieldSize: 2, defaultValue: '', field: 'Currency' },
            { fieldSize: 4, defaultValue: '', field: 'PaymentTerms' },
        ],
    },
    {
        title: 'Tax Details',
        fields: [
            { fieldSize: 2, defaultValue: '', field: 'TaxAmount' },
            { fieldSize: 2, defaultValue: '', field: 'TaxableAmount' },
            { fieldSize: 2, defaultValue: '', field: 'TaxID' },
            { fieldSize: 2, defaultValue: '', field: 'TaxExclusiveAmount' },
            { fieldSize: 2, defaultValue: '', field: 'TaxInclusiveAmount' },
            { fieldSize: 2, defaultValue: '', field: 'TaxSchemeID' },
        ],
    },
    {
        title: 'Supplier Details',
        fields: [
            { fieldSize: 12, defaultValue: '', field: 'SupplierRegistration' },
            { fieldSize: 12, defaultValue: '', field: 'SupplierStreet' },
            { fieldSize: 12, defaultValue: '', field: 'SupplierCity' },
            { fieldSize: 12, defaultValue: '', field: 'SupplierPost' },
            { fieldSize: 12, defaultValue: '', field: 'SupplierCountry' },
        ],
    },
    {
        title: 'Customer Details',
        fields: [
            { fieldSize: 12, defaultValue: '', field: 'CustomerRegistration' },
            { fieldSize: 12, defaultValue: '', field: 'CustomerStreet' },
            { fieldSize: 12, defaultValue: '', field: 'CustomerCity' },
            { fieldSize: 12, defaultValue: '', field: 'CustomerPost' },
            { fieldSize: 12, defaultValue: '', field: 'CustomerCountry' },
        ],
    },
    // {
    //     title: 'Optional',
    //     fields: [
    //         { fieldSize: 12, defaultValue: '', field: 'UBLID' }, ,
    //         { fieldSize: 12, defaultValue: '', field: 'CustomizationID' },
    //         { fieldSize: 12, defaultValue: '', field: 'ProfileID' },
    //         { fieldSize: 12, defaultValue: '', field: 'InvoiceTaxID' },
    //         { fieldSize: 12, defaultValue: '', field: 'InvoiceCode' },
    //         { fieldSize: 12, defaultValue: '', field: 'AddDocReference' },
    //         { fieldSize: 12, defaultValue: '', field: 'PaymentType' },
    //         { fieldSize: 12, defaultValue: '', field: 'PaymentID' }
    //     ],
    // },

    // { fieldSize: 12, defaultValue: '', field: 'SupplierID' },
    // { fieldSize: 12, defaultValue: '', field: 'BuyerReference' },
]

export const CreateInvoiceItems = () => {
    return (
        <div>
            <Grid container spacing={2}>
                {createInvoiceFieldDetails.map((sectionObj, idx) => (
                    <Grid item xs={12} key={`header-${idx}`}>
                        <Accordion sx={{ width: '100%', margin: "0.25rem" }}>
                            <AccordionSummary expandIcon={<ExpandMore />}>
                                <Typography variant='h5' sx={{...statsSmall, fontWeight:"400"}}>{sectionObj.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container justifyContent="left" alignItems="left" spacing={4}>
                                    {sectionObj.fields.map((field_obj, field_idx) => (
                                        <React.Fragment>
                                            <Grid item style={{ margin: "0.2rem" }} sm={(field_obj.fieldSize === 12 ? field_obj.fieldSize : field_obj.fieldSize + 4)} md={(field_obj.fieldSize)} key={`grid-item-${idx}-${field_idx}`}>
                                                {field_obj.defaultValue === '' ?
                                                    // <TextField required fullWidth variant="standard" name={field_obj.field} label={field_obj.field} id={field_obj.field} />
                                                    <TextField fullWidth variant="standard" name={field_obj.field} label={field_obj.field} id={field_obj.field} />
                                                    : <TextField fullWidth variant="standard" name={field_obj.field} label={field_obj.field} id={field_obj.field} />}
                                            </Grid>
                                        </React.Fragment>
                                    ))}
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
