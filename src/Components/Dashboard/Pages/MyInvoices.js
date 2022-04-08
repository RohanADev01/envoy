import React from 'react'
import { Card, Grid, Typography } from '@mui/material'
import { backend_base_url } from '../../../Constants'
import InvoiceOptions from '../InvoiceOptions'
import { useAuthDataContext } from '../../Landing/UserAuth'
import { pageTitle } from '../styles'
import { InvoiceDataTable } from '../InvoiceDataTable'

export const MyInvoices = () => {
  const [invoices, setInvoiceList] = React.useState([])
  const auth = useAuthDataContext();
  const token = auth.user

  React.useEffect(() => {
    fetch(backend_base_url + 'invoice/list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "token": token
      },
    })
      .then((res) => res.json())
      .then((data) => setInvoiceList(data.invoices))
  }, [])

  console.log(invoices)

  return (
    <>
      <Typography component='h1' fontSize='1.8rem' fontFamily='Montserrat' sx={pageTitle}>
        My Invoices
      </Typography>
      <InvoiceDataTable tableData={invoices}/>
    </>
  )
}
