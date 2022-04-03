import React from 'react'
import { Typography } from '@mui/material'
import { backend_base_url } from '../../../Constants'
import Invoice from '../Invoice'
import { useAuthDataContext } from '../../Landing/UserAuth'

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

  return (
    <>
      <Typography component='h1' fontSize='1.8rem' fontFamily='Montserrat'>
        My Invoices
      </Typography>
      {invoices.map(({ customer_name, timestamp, size, content }, idx) => {
        return (
          <div key={idx}>
            <Invoice
              customerName={customer_name}
              timestamp={timestamp}
              size={size}
              content={content}
            />
            <hr />
          </div>
        )
      })}
    </>
  )
}
