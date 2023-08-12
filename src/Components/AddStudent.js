import React, { useState } from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Button, TextField } from '@mui/material';



function AddStudents({students,setStudents}){
  const history = useHistory();
    const[name,setName]= useState("")
    const[batch,setBatch]= useState("")
    const[gender,setGender]= useState("")
    const[Qualification,setQualification]= useState("")
    
    const createStudent = async () =>{
        const newStudents ={
            name : name,
            batch : batch,
            gender : gender,
            Qualification :Qualification,
        }
           const response = await fetch('https://649820699543ce0f49e1abe3.mockapi.io/users',
            {method:"POST",
             body:JSON.stringify(newStudents),
            headers:{
                'Content-Type':'application/json'
            }})

const data = await response.json() 

     setStudents([...students, data])
     history.push("/students")
     
    }
    return(
        <Base
        title="Create New Student Data"
        description= "This is a page to add students in the database."
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
            onClick={createStudent}>
              Add Student</Button>
          
        </div>
    </Base>  
  )
}
export default AddStudents