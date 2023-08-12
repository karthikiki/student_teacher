import React from 'react'
import Base from '../Base/Base'
import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const TeacherDashboard = () => {
  const history=useHistory();
  return (
    <Base
    title={"welcome"}
    description={"Teacher's DashBoard"}>
     <div className='.nav-bar'>
     <Button
       onClick={()=>history.push("/teachers")} >
         Teachers List</Button>
       <Button 
       onClick={()=>history.push("/addteacher")}>
         Add-Teacher</Button>
       </div>
   </Base>
  )
}

export default TeacherDashboard