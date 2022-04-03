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
    const [alertFail, setFailAlert] = useState(false)
    const [alertSuccess, setSuccessAlert] = useState(false)
    const [alertContent, setAlertContent] = useState('')

    const auth = useAuthDataContext()

    const handleSubmit = (event) => {
        event.preventDefault()
        resetAlerts()

        const data = new FormData(event.currentTarget);

        // TO BE UNCOMMENTED WHEN NOT USING DUMMY DATA

        // let body_details = {};
        // createInvoiceFieldsList.forEach((field) => {
        //     body_deets[field] = data.get(field)
        // })

        // NOTE for Winnie: update format of body details in CreateInvoiceDummyData.js

        let body_details = dummyData;
        console.log(body_details);

        const create_url = backend_base_url + 'invoice/create'

        trackPromise(
            axios({
                method: 'POST',
                url: create_url,
                data: body_details,
            })
                .then((data) => {
                    console.log(data)

                    // NOTE for Winnie: then uncomment the relevant lines!!!

                    // let msg = data.data.msg
                    // let token = data.data.token
                    // setAlertContent(msg)

                    // if (msg == `Successfully created and stored invoice for ${auth.email}`) {
                    //     setSuccessAlert(true)
                    // } else {
                    //     setFailAlert(true)
                    // }
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
