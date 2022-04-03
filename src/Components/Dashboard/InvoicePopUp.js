import React from 'react'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'

export default function InvoicePopUp(props) {
  const { onClose, open, name, content } = props

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{name}</DialogTitle>
      {content}
    </Dialog>
  )
}
