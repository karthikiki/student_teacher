import React from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const NoPage = () => {
    const history = useHistory();
  return (
   <Base 
   title="404" 
   description="The page you are looking for does not exist">
   <button onClick={()=>history.push("/")}>Back</button>
   </Base>
  )
}

export default NoPage