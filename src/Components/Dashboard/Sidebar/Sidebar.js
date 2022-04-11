import React, { useEffect, useState } from 'react'
import { Drawer, Divider } from '@mui/material'

import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { Dashboard } from '@mui/icons-material'
import PersonIcon from '@mui/icons-material/Person';

import DrawerList from './DrawerItems'
import { Main, drawerWidth, DrawerHeader } from './Styles'
import { Activity } from '../Pages/Activity'
import { CreateInvoice } from '../Pages/CreateInvoice'
import { MyInvoices } from '../Pages/MyInvoices'
import Profile from '../Pages/Profile'

function Sidebar(props) {
  const [activeLink, changeLinkState] = useState({
    activeItem: { icon: <Dashboard />, text: 'Dashboard', route: '/dashboard/' },
    objects: [
      { icon: <Dashboard />, text: 'Dashboard', route: '/dashboard/' },
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
      {
        icon: <PersonIcon />,
        text: 'My Profile',
        route: '/dashboard/profile'
      }
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
        <DrawerList activeLink={activeLink} changeLinkState={changeLinkState} />
      </Drawer>

      <Main open={props.sideBarState}>
        <DrawerHeader />

        {activeLink.activeItem.route === '/dashboard/' && <Activity />}

        {activeLink.activeItem.route === '/dashboard/create' && (
          <CreateInvoice />
        )}

        {activeLink.activeItem.route === '/dashboard/invoices' && (
          <MyInvoices activeLink={activeLink} changeLinkState={changeLinkState} item={{
            icon: <NoteAddIcon />,
            text: 'Create Invoice',
            route: '/dashboard/create',
          }} />
        )}

        {activeLink.activeItem.route === '/dashboard/profile' && (
          <Profile />
        )}
      </Main>
    </React.Fragment>
  )
}

export default Sidebar
