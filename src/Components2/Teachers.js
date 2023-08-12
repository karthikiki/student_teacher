import React from 'react'
import {useHistory} from 'react-router-dom'
import Base from '../Base/Base';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

function Teachers({teachers,setTeachers}){
    const history = useHistory();
    const deleteTeachers = async(teachId)=>{
         const response1 = await fetch(`https://64987c339543ce0f49e2143a.mockapi.io/teacher/${teachId}`,{
            method:"DELETE"
         });
         const data1 = await response1.json()
         if(data1){
            const remainingTeachers = teachers.filter((teach,idx)=> teach.id !== teachId)
            setTeachers(remainingTeachers)
         }
    }
  return (
     <Base
     title={"Teacher List"}
     description={"Here we can View, Edit, Delete Teachers Details "}>
     <div className='card-container'>
        {teachers.map((teach,idx)=>(
        <Card sx={{maxWidth:400}} key={idx}>
             <CardContent>
               <Typography gutterBottom varient="h5" component="div">
                   <b>{teach.name}</b>
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  Subject: {teach.subject}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  Contact: {teach.contact}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                   Performance: {teach.performance}
               </Typography>
            </CardContent> 
            <CardActions className='button' >
               <Button size='large' onClick={()=>history.push(`/edit_teacher/${idx}`)}>Edit</Button>
               <Button size='large'onClick={()=>deleteTeachers(teach.id)}>Delete</Button>
            </CardActions>
        </Card>
        ))}
     </div>
     
     </Base>
  )
}

export default Teachers