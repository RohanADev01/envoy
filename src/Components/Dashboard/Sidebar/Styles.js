import { styled } from '@mui/material/styles'

export const drawerWidth = 240

export const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: `${drawerWidth}px`,
  }),
}))

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

export const linkContent = {
  color: '#6E6E6ECC',
}

export const activeHighlight = {
  background: '#f6f5f5',
}

export const activeIcon = {
  color: 'orangered',
}

export const activeText = {
  color: '#36454F',
}
