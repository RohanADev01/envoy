import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import InvoicePopUp from './InvoicePopUp'

export default function Invoice(props) {
  const [open, setOpen] = React.useState(false)
  function handleOpen() {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            {props.size} Bytes
          </Typography>
          <Typography variant='h5' component='div'>
            {props.customerName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            {props.timestamp}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' onClick={handleOpen}>
            Open
          </Button>
        </CardActions>
      </Card>
      {open ? (
        <InvoicePopUp
          onClose={handleClose}
          open={open}
          content={props.content}
          name={props.customerName}
        >
          test
        </InvoicePopUp>
      ) : null}
    </>
  )
}
