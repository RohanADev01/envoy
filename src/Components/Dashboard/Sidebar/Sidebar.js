import React, { useState } from 'react'
import { Drawer, Divider } from '@mui/material'

import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import HomeIcon from '@mui/icons-material/Home'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import NoteAddIcon from '@mui/icons-material/NoteAdd'

import DrawerList from './DrawerItems'
import { Main, drawerWidth, DrawerHeader } from './styles'
import { Activity } from '../pages/Activity'
import { CreateInvoice } from '../pages/CreateInvoice'
import { MyInvoices } from '../pages/MyInvoices'

function Sidebar(props) {
  const [activeLink, changeLinkState] = useState({
    activeItem: { icon: <HomeIcon />, text: 'Home', route: '/dashboard/' },
    objects: [
      { icon: <HomeIcon />, text: 'Home', route: '/dashboard/' },
      {
        icon: <NoteAddIcon />,
        text: 'Create Invoice',
        route: '/dashboard/create',
      },
      {
        icon: <InboxIcon />,
        text: 'My Invoices',
        route: '/dashboard/invoices',
      },
    ],
  })

  return (
    <React.Fragment>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='persistent'
        anchor='left'
        open={props.sideBarState}
      >
        <DrawerHeader>
          <IconButton onClick={props.onChange}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <DrawerList activeLink={activeLink} changeLinkState={changeLinkState} />
      </Drawer>

      <Main open={props.sideBarState}>
        <DrawerHeader />
        {activeLink.activeItem.route === '/dashboard/' && <Activity />}
        {activeLink.activeItem.route === '/dashboard/create' && (
          <CreateInvoice />
        )}
        {activeLink.activeItem.route === '/dashboard/invoices' && (
          <MyInvoices />
        )}
      </Main>
    </React.Fragment>
  )
}

export default Sidebar
