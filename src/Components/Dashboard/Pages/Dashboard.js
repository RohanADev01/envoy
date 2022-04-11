import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { userDetails } from '../UserDetails'

function DashboardContents() {
  const [open, setOpen] = useState(true)
  const toggleSidebar = () => {
    setOpen(!open)
  }

  const [profileColor, setProfileColor] = useState(userDetails.hex_colour)
  const [profileFirstName, setProfileFirstName] = useState(
    userDetails.firstname
  )
  const [profileLastName, setProfileLastName] = useState(userDetails.lastname)
  const [profileEmail, setProfileEmail] = useState(userDetails.email)

  const userProfileDetails = {
    profileColor,
    setProfileColor,
    profileFirstName,
    setProfileFirstName,
    profileLastName,
    setProfileLastName,
    profileEmail,
    setProfileEmail,
  }

  useEffect(() => {
    document.body.style.backgroundColor = '#F8FFFE'
  }, [])

  return (
    <div>
      <Navbar
        onChange={toggleSidebar}
        sideBarState={open}
        userProfileState={userProfileDetails}
      />
      <Sidebar
        onChange={toggleSidebar}
        sideBarState={open}
        userProfileState={userProfileDetails}
      />
    </div>
  )
}

export default DashboardContents
