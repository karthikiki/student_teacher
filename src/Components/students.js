import React, { useState } from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

function Students({students,setStudents}) {
 const history = useHistory();
//  const[editIdx, setEditIdx] = useState();
 //delete
 const deleteStudent= async (studId)=>{
       const response = await fetch(`https://649820699543ce0f49e1abe3.mockapi.io/users/${studId}`,{
        method:"DELETE"
       });
       const data = await response.json()
       if(data){
        const remainingStudents = students.filter((stud,idx)=> stud.id !== studId)
        setStudents(remainingStudents)
       }
 }
    return(
    <Base
    title={"Student List"}
    description={"Here we can View, Edit, Delete Student Details "}> 

    <div className='card-container'>
        {students.map((stud,idx)=>(
        <Card sx={{ maxWidth: 375 }} key={idx}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           <b><i>{stud.name}</i></b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Batch: {stud.batch}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gender: {stud.gender}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Qualification: {stud.Qualification}
          </Typography>
        </CardContent>
        <div >
        <CardActions className='button'>
          <Button  size="small" onClick={()=>history.push(`/edit/${idx}`)}>Edit</Button>
          <Button  size="small" onClick={()=>deleteStudent(stud.id)}>Delete</Button>
        </CardActions>
        </div>
      </Card>
        ))}
     </div> 
    </Base>
    
    )
 }
 export default Students 