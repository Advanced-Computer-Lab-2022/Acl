import React from 'react'
import AdminRequests from '../components/AdminRequets'
import Navbar from '../components/Navbarr'

function AdminCourseRequests() {
  return (
    <div>
      <Navbar/>
      <div className='main'>
        <AdminRequests/>
      </div>
    </div>
  )
}

export default AdminCourseRequests