import React, { useEffect, useState } from 'react'
import { Button, Card, Grid, Typography } from '@mui/material'
import { backend_base_url } from '../../../Constants'
import InvoiceOptions from '../InvoiceOptions'
import { useAuthDataContext } from '../../Landing/UserAuth'
import { cardHeader, pageTitle, statsBig } from '../styles'
import { InvoicesTable } from '../InvoicesTable'
import { InvoiceDataTable } from '../InvoiceDataTable'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router'
import Loading from '../../../assets/Loading.gif'

export const MyInvoices = (props) => {
  const [invoices, setInvoiceList] = React.useState([])
  const [finishedLoading, setFinishedLoading] = useState(true)
  const auth = useAuthDataContext()
  const token = auth.user

  React.useEffect(() => {
    let isMounted = true
    setFinishedLoading(false)
    fetch(backend_base_url + 'invoice/list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "token": token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setInvoiceList(data.invoices)
          setFinishedLoading(true)
        }
      })
    return () => { isMounted = false };
  }, [])

  const navigate = useNavigate()
  function handleLinkChange() {
    props.changeLinkState({ ...props.activeLink, activeItem: props.item })
    navigate('/dashboard/create')
  }

  return (
    <>
      {props.activeLink.activeItem.route === '/dashboard/create' && <Navigate to='/dashboard/create' />}
      <Typography
        component='h1'
        fontSize='1.8rem'
        fontFamily='Montserrat'
        sx={pageTitle}
      >
        My Invoices
      </Typography>
      {!finishedLoading && <img src={Loading} style={{ height: "100px", width: "133px" }}></img>}
      {finishedLoading && (invoices.length == 0 ? (
        <React.Fragment>
          <Typography variant='h3' sx={cardHeader}>
            No invoices to display yet. Try creating one.
          </Typography>
          <Button variant="contained" onClick={handleLinkChange} sx={{ textTransform: "none", color: "#F3FFFE", backgroundColor: "#2A9D8F", '&:hover': { backgroundColor: '#2A9D8F' } }}>Create Invoice</Button>
        </React.Fragment>
      ) : (
        <InvoiceDataTable tableData={invoices} />
      ))
      }
    </>
  )
}
