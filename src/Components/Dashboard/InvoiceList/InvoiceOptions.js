import React, { useState } from 'react'
import Button from '@mui/material/Button'
import InvoicePopUpRaw from './InvoicePopUpRaw'
import { TableCell } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material'
import { btnStyle, btnStyle2, grey_icons, success } from '../styles'
import InvoicePopUpSend from './InvoicePopUpSend';
import InvoiceDelete from './InvoiceDelete';
import axios from 'axios';

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

  // FOR DELETING INVOICES
  const [deleteDialog, setDeleteDialog] = useState(false)
  function handleDelete() {
    setDeleteDialog(true)
  }

  // Close Dialogs
  const handleClose = () => {
    setOpenRawDialog(false)
    setOpenSendDialog(false)
    setDeleteDialog(false)
  }

  // download ZIP file for invoice PDF
  const downloadInvoicePDF = () => {
    const id = 95
    axios.get('https://e-invoice-rendering-brownie.herokuapp.com/invoice/rendering/download', { params: { file_id: id, file_type: "PDF" } })
      .then((data) => {
        console.log(data)
      })
    // const element = document.createElement("a");
    // const file = new Blob([content], {
    //   type: "application/zip"
    // });
    // element.href = URL.createObjectURL(file);
    // element.download = `${id}.zip`;
    // document.body.appendChild(element);
    // element.click();
  }

  return (
    <>
      <TableCell sx={props.styleObj}>
        {/* FOR SHOWING RAW INVOICES */}
        <Button sx={btnStyle2} variant="standard" size='small' onClick={handleOpen}>{" View Raw XML "}</Button>
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
        <Button sx={btnStyle2} variant="standard" size='small' onClick={downloadInvoicePDF}>{" View PDF "}</Button>
      </TableCell>
      {/* add something similar to openRawDialog for rendering and download pdf as well */}

      {/* FOR SENDING INVOICES */}
      <TableCell sx={props.styleObj}>
        <Button sx={btnStyle2} variant="standard" size='small' onClick={handleOpenSend}>{" Send Invoice "}</Button>
      </TableCell>
      {openSendDialog ? (
        <InvoicePopUpSend
          onClose={handleClose}
          open={openSendDialog}
          content={props.content}
          name={props.customerName}
        />
      ) : null}

      {/* FOR DELETING INVOICES */}
      <TableCell sx={props.styleObj}>
        <IconButton onClick={handleDelete}>
          <DeleteIcon sx={{ color: grey_icons.color }} />
        </IconButton>
      </TableCell>
      {deleteDialog ? (
        <InvoiceDelete
          onClose={handleClose}
          open={deleteDialog}
          id={props.invoice_id}
          invoiceStates={props.invoiceStates} />
      ) : null}
    </>
  )
}
