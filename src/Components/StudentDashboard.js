import React from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import { Button } from '@mui/material';

const StudentDashboard = () => {
    const history = useHistory();
  return (
    <Base
       title={"welcome"}
       description={"Student DashBoard"}>
        <div className='.nav-bar'>
        <Button
          onClick={()=>history.push("/students")}>
            Student List</Button>
          <Button onClick={()=>history.push("/add")}>
            Add-Student</Button>
          </div>
      </Base>
          
  )
}

export default StudentDashboard