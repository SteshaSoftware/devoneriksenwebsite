import React, { useEffect } from 'react'
import AdminNavbar from '../components/AdminComp/adminNavbar';
import { Navigate, Outlet } from 'react-router-dom';

const AdminControl = () => {

    return (
        localStorage.getItem("token") ? (
          <>
            <AdminNavbar />
            <Outlet />
          </>
        ) : <Navigate to="/login" />
      )
}

export default AdminControl










