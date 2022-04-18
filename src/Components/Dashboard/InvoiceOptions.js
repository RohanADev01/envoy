import React, { useState } from 'react'
import Button from '@mui/material/Button'
import InvoicePopUpRaw from './InvoicePopUpRaw'
import { TableCell } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material'
import { tag2 } from './styles'
import InvoicePopUpSend from './InvoicePopUpSend';

export default function InvoiceOptions(props) {
  // FOR RAW INVOICES
  const [openRawDialog, setOpenRawDialog] = useState(false)
  function handleOpen() {
    setOpenRawDialog(true)
  }

  // FOR SENDING INVOICES
  const [openSendDialog, setOpenSendDialog] = useState(false)
  function handleOpenSend() {
    setOpenSendDialog(true)
  }

  // PLACEHOLDER SINCE RENDER AND DELETE IS INCOMPLETE
  function emptyFunction() {
    return
  }

  // Close Dialogs
  const handleClose = () => {
    setOpenRawDialog(false)
    setOpenSendDialog(false)
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
        />
      ) : null}

      {/* FOR RENDERING PDF INVOICES (INCOMPLETE) */}
      <TableCell sx={props.styleObj}>
        <Button size='small' onClick={emptyFunction}>{" View PDF "}</Button>
      </TableCell>
      {/* add something similar to openRawDialog for rendering and download pdf as well */}

      {/* FOR SENDING INVOICES */}
      <TableCell sx={props.styleObj}>
        <Button size='small' onClick={handleOpenSend}>{" Send Invoice "}</Button>
      </TableCell>
      {openSendDialog ? (
        <InvoicePopUpSend
          onClose={handleClose}
          open={openSendDialog}
          content={props.content}
          name={props.customerName}
        />
      ) : null}

      {/* FOR DELETING INVOICES (INCOMPLETE) */}
      <TableCell sx={props.styleObj}>
        <IconButton>
          <DeleteIcon sx={{ color: tag2.backgroundColor }} />
        </IconButton>
      </TableCell>
    </>
  )
}
