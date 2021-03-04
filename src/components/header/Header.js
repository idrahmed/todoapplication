import React from 'react'
import './header.css'
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";

function Header() {
  const tab = window.location.pathname
  const user_dp = localStorage.getItem('user_dp')

  const dashboardStyle = {
    color: 'white',
    textDecoration: 'underline',
    textUnderlineOffset: '20px'
  }

    return (
        <div className="header">
          <Link to="/dashboard">
        <h2 style={tab === "/dashboard" ? dashboardStyle : {}}>DashBoard</h2>
        </Link>
        <Avatar src={user_dp}/>
      </div>
    )
}

export default Header
