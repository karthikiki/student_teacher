import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import { Button, TextField } from '@mui/material'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function UpdateTeachers({teachers,setTeachers}){
    
    const{id} = useParams();
    const editTeacher = teachers[id]
    const [name,setName]= useState("")
    const [subject,setSubject]= useState("")
    const [contact,setContact] = useState("")
    const [performance,setPerformance] = useState("")
    const history = useHistory();

    useEffect(()=>{
        setName(editTeacher.name)
        setSubject(editTeacher.subject)
        setContact(editTeacher.contact)
        setPerformance(editTeacher.performance)
    },[editTeacher])
      
    async function updateTeacher(){
        const updatedObject = {
            name:name,
            subject:subject,
            contact:contact,
            Performance:performance,
        }
        const response1 = await fetch(`https://64987c339543ce0f49e2143a.mockapi.io/teacher/${editTeacher.id}`,{
            method:"PUT",
            body:JSON.stringify(updatedObject),
            headers:{"Content-Type":"application/json"}
        })
        const data1 = await response1.json()
        if(data1){
            console.log(updatedObject)
            teachers[id] = updatedObject
            setTeachers([...teachers])
            history.push("/teachers")
        }
    }
  return (
    <Base
    title={"Teachers"}
    description={`Edit Teacher - (${name})`}>
        <div className='text-field'>
            <TextField
            id='outlined-basic'
            label="Name"
            fullWidth sx={{m:1}}
            varient="outlined"
            type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
             <TextField
            id='outlined-basic'
            label="Subject"
            fullWidth sx={{m:1}}
            varient="outlined"
            type="text"
                value={subject}
                onChange={(e)=>setSubject(e.target.value)}/>
             <TextField
            id='outlined-basic'
            label="Contact"
            fullWidth sx={{m:1}}
            varient="outlined"
            type="text"
                value={contact}
                onChange={(e)=>setContact(e.target.value)}/>
             <TextField
            id='outlined-basic'
            label="Performance"
            fullWidth sx={{m:1}}
            varient="outlined"
            type="text"
                value={performance}
                onChange={(e)=>setPerformance(e.target.value)}/>    

                <br></br>
                <Button onClick={updateTeacher}>Update Teacher</Button>        
        </div>
    </Base>
  )
}

export default UpdateTeachers