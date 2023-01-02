import React from 'react'
import App from '../components/AdminCreateUsers'

import AdminForm from '../components/AdminForm'
import CorTraineeForm from '../components/CorTraineeForm'
import InstructorForm from '../components/InstructorForm'
import Navbar from '../components/Navbarr'

function CreateUsers() {
  return (
    <div>
      <Navbar/>
      <div className='main'>
        {/* <AdminForm/>
        <InstructorForm/>
        <CorTraineeForm/> */}
        <App/>
      </div>
    </div>
  )
}

export default CreateUsers