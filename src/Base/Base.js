import { Button, Typography } from '@mui/material';
import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Base = ({title,description,children}) => {
    const history = useHistory();
    return(
    <div className='main-component base-component'>
         <div className='home'>

         </div>
       <div className='.nav-bar'>
        <Button
        onClick={()=>history.push("/")}
        >Dashboard</Button>

        <Button
        onClick={()=>history.push("/studentDashboard")}
        >Student</Button>

        <Button
        onClick={()=>history.push("/teacherDashboard")}
        >Teacher's</Button>
       </div>
            {/* <header>
            <Typography variant="h4" component="h2">
            {title}
            </Typography>
            </header> */}
            <main className='main-segment'>
                <h2>{description}</h2>
                <div className='gap'>
                    {children}
                </div>
            </main>
           
        </div>
        
    )
 }
 export default Base