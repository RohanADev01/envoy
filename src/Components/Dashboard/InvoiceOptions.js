import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import InvoicePopUpRaw from './InvoicePopUpRaw'
import { TableCell } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material'

export default function InvoiceOptions(props) {
  // FOR RAW INVOICES
  const [openRawDialog, setOpenRawDialog] = React.useState(false)
  function handleOpen() {
    setOpenRawDialog(true)
  }
  
  // PLACEHOLDER SINCE RENDER AND SEND ARE INCOMPLETE
  const emptyFunction = () => {
  }
  
  const handleClose = () => {
    setOpenRawDialog(false)
  }

  return (
    <>
      <TableCell sx={props.styleObj}>
        {/* FOR SHOWING RAW INVOICES */}
        <Button size='small' onClick={handleOpen}>{" View Raw XML "}</Button>
      </TableCell>
      {openRawDialog ? (
        <InvoicePopUpRaw
          onClose={handleClose}
          open={openRawDialog}
          content={props.content}
          name={props.customerName}
        >
          test
        </InvoicePopUpRaw>
      ) : null}

      {/* FOR RENDERING PDF INVOICES (INCOMPLETE) */}
      <TableCell sx={props.styleObj}>
        <Button size='small' onClick={emptyFunction}>{" View PDF "}</Button>
      </TableCell>
      {/* add something similar to openRawDialog for rendering and download pdf as well */}

      {/* FOR SENDING INVOICES (INCOMPLETE) */}
      <TableCell sx={props.styleObj}>
        <Button size='small' onClick={emptyFunction}>{" Send Invoice "}</Button>
      </TableCell>
      {/* add something similar to openRawDialog but for sending it to someone */}

      {/* FOR DELETING INVOICES (INCOMPLETE) */}
      <TableCell sx={props.styleObj}>
        <IconButton>
          <DeleteIcon color="error" />
        </IconButton>
      </TableCell>
    </>
  )
}
