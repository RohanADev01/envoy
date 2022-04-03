import React, { useState } from 'react'
import { Typography, Box, Button } from '@mui/material'
import { trackPromise } from 'react-promise-tracker'
import axios from 'axios'
import { backend_base_url } from '../../../Constants'
import { CreateInvoiceItems, createInvoiceFieldsList } from '../CreateInvoiceItems'
import { useAuthDataContext } from '../../Landing/UserAuth'
import { FailAlert, SuccessAlert } from '../../Landing/Constants'
import { LoadingIndicatorCreateInvoice } from '../constants'
import { dummyData } from '../CreateInvoiceDummyData'

export const CreateInvoice = () => {
    const [alertFail, setFailAlert] = useState(false);
    const [alertSuccess, setSuccessAlert] = useState(false);
    const [alertContent, setAlertContent] = useState('');

    const auth = useAuthDataContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        resetAlerts();

        const data = new FormData(event.currentTarget);
        
        let body_details = {
            "token": auth.user,
            "invoice_data": dummyData
        };
        
        // createInvoiceFieldsList.forEach((field) => {
        //     body_details["invoice_data"][field] = data.get(field)
        // });
        
        body_details["invoice_data"]["UBLID"] = Number(body_details["invoice_data"]["UBLID"]);
        body_details["invoice_data"]["InvoiceCode"] = Number(body_details["invoice_data"]["InvoiceCode"]);
        body_details["invoice_data"]["SupplierID"] = Number(body_details["invoice_data"]["SupplierID"]);        
        body_details["invoice_data"]["SupplierPost"] = Number(body_details["invoice_data"]["SupplierPost"]);   
        body_details["invoice_data"]["PaymentType"] = Number(body_details["invoice_data"]["PaymentType"]); 
        body_details["invoice_data"]["TaxAmount"] = Number(body_details["invoice_data"]["TaxAmount"]); 
        body_details["invoice_data"]["TaxableAmount"] = Number(body_details["invoice_data"]["TaxableAmount"]); 
        body_details["invoice_data"]["TaxSubtotalAmount"] = Number(body_details["invoice_data"]["TaxSubtotalAmount"]);
        body_details["invoice_data"]["TaxPercent"] = Number(body_details["invoice_data"]["TaxPercent"]);
        body_details["invoice_data"]["LegalLineExtension"] = Number(body_details["invoice_data"]["LegalLineExtension"]);
        body_details["invoice_data"]["TaxExclusiveAmount"] = Number(body_details["invoice_data"]["TaxExclusiveAmount"]);
        body_details["invoice_data"]["TaxInclusiveAmount"] = Number(body_details["invoice_data"]["TaxInclusiveAmount"]);
        body_details["invoice_data"]["TaxPercent"] = Number(body_details["invoice_data"]["TaxPercent"]);
        body_details["invoice_data"]["PayableRoundingAmount"] = Number(body_details["invoice_data"]["PayableRoundingAmount"]);
        body_details["invoice_data"]["PayableAmount"] = Number(body_details["invoice_data"]["PayableAmount"]);
        body_details["invoice_data"]["InvoiceQuantity"] = Number(body_details["invoice_data"]["InvoiceQuantity"]);
        body_details["invoice_data"]["InvoiceLineExtension"] = Number(body_details["invoice_data"]["InvoiceLineExtension"]);
        body_details["invoice_data"]["InvoiceTaxID"] = Number(body_details["invoice_data"]["InvoiceTaxID"]);
        body_details["invoice_data"]["InvoiceTaxPercent"] = Number(body_details["invoice_data"]["InvoiceTaxPercent"]);
        body_details["invoice_data"]["InvoicePriceAmount"] = Number(body_details["invoice_data"]["InvoicePriceAmount"]);
        body_details["invoice_data"]["InvoiceBaseQuantity"] = Number(body_details["invoice_data"]["InvoiceBaseQuantity"]);
        
        console.log(body_details)

        const create_url = backend_base_url + 'invoice/create'

        trackPromise(
            axios({
                method: 'POST',
                url: create_url,
                data: body_details,
            })
                .then((data) => {
                    let msg = data.data.msg
                    setAlertContent(msg)

                    if (msg == `Successfully created and stored invoice for ${auth.email}`) {
                        setSuccessAlert(true)
                    } else {
                        setFailAlert(true)
                    }
                })
                .catch((error) => {
                    console.log(error)
                    setAlertContent(
                        'An unknown error occured, please try again another time.'
                    )
                    setFailAlert(true)
                })
        )
    }

    const resetAlerts = (event) => {
        setFailAlert(false)
    }

    return (
        <>
            <Typography component="h1" variant="h5" fontFamily="Montserrat" fontWeight="700" alignItems="flex-start" marginBottom="10px">
                Create Invoice
            </Typography>
            <Box component="form" onChange={resetAlerts} onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <CreateInvoiceItems />

                <FailAlert alertFail={alertFail} alertContent={alertContent} />
                <SuccessAlert alertSuccess={alertSuccess} alertContent={alertContent} />
                <LoadingIndicatorCreateInvoice success={alertSuccess}/>
            </Box>
        </>
    )
}
