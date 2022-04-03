import React from 'react'
import { Typography } from '@mui/material'
import { backend_base_url } from '../../../Constants'
import Invoice from '../Invoice'
import { useAuthDataContext } from '../../Landing/UserAuth'

export const MyInvoices = () => {
  const auth = useAuthDataContext();

  const [invoices, setInvoiceList] = React.useState([])
  React.useEffect(() => {
    fetch(backend_base_url + 'invoice/list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "token": auth.user,
      },
    })
      .then((res) => res.json())
      .then((data) => setInvoiceList(data.invoices))
  }, [])
  console.log(invoices)

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
