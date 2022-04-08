import React, { useEffect } from 'react'
import Topbar from '../Topbar'

function Home() {
  useEffect(()=>{
    document.body.style.backgroundColor = "#fff"
  }, [])

  return (
    <div>
      <Topbar />
    </div>
  )
}

export default Home
