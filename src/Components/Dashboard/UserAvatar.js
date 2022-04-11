import { Avatar } from '@mui/material'
import React from 'react'
import { userDetails } from './UserDetails'

const UserAvatar = (props) => {
  const AvatarInitials =
    userDetails.firstname && userDetails.lastname
      ? `${userDetails.firstname[0].toUpperCase()}${userDetails.lastname[0].toUpperCase()}`
      : `${userDetails.email[0].toUpperCase()}`
  const AvatarColor = props.profileColorState['profileColor']
    ? { backgroundColor: props.profileColorState['profileColor'] }
    : { backgroundColor: '#1ABC9C' }

  return (
    <Avatar sx={{ ...AvatarColor, width: props.width, height: props.height, fontSize: props.fontSize }}>
      {AvatarInitials}
    </Avatar>
  )
}

export default UserAvatar
