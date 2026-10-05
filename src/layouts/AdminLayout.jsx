import React from 'react'
import { Outlet,Link } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div>
        <Link to="/admin">Users</Link>
        <hr />
        <Outlet/>
    </div>
  )
}
