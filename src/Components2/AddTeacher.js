import React, { useState } from 'react'
import Base from '../Base/Base'
import { Button, TextField } from '@mui/material'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function AddTeacher({teachers,setTeachers}){
    const history = useHistory();
    const [name,setName]= useState("")
    const [subject,setSubject]= useState("")
    const [contact,setContact] = useState("")
    const [performance,setPerformance] = useState("")

    const createTeachers = async ()=>{
        const newTeachers ={
            name:name,
            subject : subject,
            contact:contact,
            performance:performance,
        }
        const response1 = await fetch('https://64987c339543ce0f49e2143a.mockapi.io/teacher',{
            method:"POST",
            body:JSON.stringify(newTeachers),
            headers:{
                'Content-Type':'application/json'
            }})
            const data1 = await response1.json()
            setTeachers([...teachers,data1])
              history.push("/teachers")
    }
  return (
    <Base
    title={"Create New Teacher's Data"}
    description={"Add Teachers in database"}>
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
                <Button
                 variant="contained" 
                 onClick={createTeachers}>
                    Add Teacher</Button>        
        </div>
    </Base>
  )
}

export default AddTeacher
