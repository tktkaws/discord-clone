import React from 'react'
import './Sidebar.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
  return (
    <div className="sideBar">
        <div className="sideBarLeft">
            <div className="serverIcon">
                <img src="/logo192.png" alt="" />
            </div>
            <div className="serverIcon">
                <img src="/logo192.png" alt="" />
            </div>
        </div>
        <div className="sideBarRight">
            <ExpandMoreIcon />
        </div>
    </div>
  )
}

export default Sidebar