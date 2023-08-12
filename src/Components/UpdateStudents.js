import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Base from '../Base/Base';
import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

function UpdateStudents  ({students,setStudents,editIdx}) {
    const{id} = useParams();
    const editStudent = students[id]
    const[name,setName]= useState("")
    const[batch,setBatch]= useState("")
    const[gender,setGender]= useState("")
    const[Qualification,setQualification]= useState("")
    const history = useHistory(); 

    useEffect(()=>{
        setName(editStudent.name)
        setBatch(editStudent.batch)
        setGender(editStudent.gender)
        setQualification(editStudent.Qualification)
    },[editStudent]) 

    async function updateStudent(){
       const updatedObject = {
        name:name,
        batch:batch,
        gender:gender,
        Qualification:Qualification
       }

       const response = await fetch(`https://649820699543ce0f49e1abe3.mockapi.io/users/${editStudent.id}`,
       {method:"PUT",
       body:JSON.stringify(updatedObject),
       headers:{"Content-Type":"application/json"}
        
     })
     const data = await response.json()
     if(data){
       console.log(updatedObject)
       students[id] = updatedObject
       setStudents([...students])
       history.push("/students")
    }
}
  return (
    <Base
    title="Edit User"
      description={`Edit Student - (${name})`}
    >
     <div className='text-field'>
         <TextField 
         id="outlined-basic" 
         label="Name" 
         fullWidth sx={{m:1 }}
         variant="outlined"
         type="text" 
            value = {name} 
            onChange={(e)=>setName(e.target.value)} />
         <TextField 
         id="outlined-basic" 
         label="Batch" 
         fullWidth sx={{m:1 }}
         variant="outlined"
         type="text" 
            value = {batch} 
            onChange={(e)=>setBatch(e.target.value)}/>
         <TextField 
         id="outlined-basic" 
         label="Gender" 
         fullWidth sx={{m:1 }}
         variant="outlined" 
         type="text" 
            value = {gender} onChange={(e)=>setGender(e.target.value)}/>
         <TextField 
         id="outlined-basic" 
         label="Qualification" 
         fullWidth sx={{m:1 }}
         variant="outlined" 
         type="text" 
            value = {Qualification} onChange={(e)=>setQualification(e.target.value)}/>
            
    <br></br>
    <Button 
            variant="contained" 
            onClick={updateStudent}>
              Update  User</Button>
    
</div>
</Base>
  )
}

export default UpdateStudents