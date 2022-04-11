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

  useEffect(() => {
    document.body.style.backgroundColor = "#F8FFFE"
  }, [])

  return (
    <div>
      <Navbar onChange={toggleSidebar} sideBarState={open} profileColorState={{ profileColor, setProfileColor }} />
      <Sidebar onChange={toggleSidebar} sideBarState={open} profileColorState={{ profileColor, setProfileColor }} />
    </div>
  )

}

export default DashboardContents
