import { Switch,Route } from 'react-router-dom';
import './App.css';
import Base from './Base/Base';
import Students from './Components/students';
import AddStudents from './Components/AddStudent';
import data from './Data/data';
import { useEffect, useState } from 'react';
import UpdateStudents from './Components/UpdateStudents';
import NoPage from './Components/NoPage';
import Dashboard from './Components/Dashboard';
import StudentDashboard from './Components/StudentDashboard';
import Teachers from './Components2/Teachers';
import TeacherDashboard from './Components2/TeacherDashboard';
import AddTeacher from './Components2/AddTeacher'
import UpdateTeacher from './Components2/UpdateTeacher';

function App() {
  const[students,setStudents] =  useState([]);
  const[teachers,setTeachers] = useState([]);
  useEffect(()=>{
    const result = async ()=>{
      //student data
      let response= await fetch('https://649820699543ce0f49e1abe3.mockapi.io/users',{
        method:"GET",
      });
      const data = await response.json();
      console.log(data)
      //teacher data
      let response1 = await fetch('https://64987c339543ce0f49e2143a.mockapi.io/teacher',{
        method: "GET",
      })
      const data1 = await response1.json();
      console.log(data1)
      if(data){
        setStudents([...data]);
      }if(data1){
         setTeachers([...data1])
      }
      else{
        alert("Error");
      }
    }
    result();
  })
  return (
    <div className="App">
      <Switch>
         <Route exact path="/">
            <Dashboard/>
         </Route >
         <Route path="/studentDashboard">
            <StudentDashboard
            students ={students}
            setStudents={setStudents}/>
         </Route>
         <Route path="/students">
           <Students
            students ={students}
            setStudents={setStudents}/>
         </Route>
         <Route path="/add">
            <AddStudents
            students ={students}
            setStudents={setStudents}/>
         </Route>
         <Route path="/edit/:id/">
            <UpdateStudents
            students ={students}
            setStudents={setStudents}/>
         </Route>
         <Route path="/teacherDashboard">
          <TeacherDashboard
          teachers ={teachers}
          setTeachers ={setTeachers}/>
         </Route>
         <Route path="/teachers">
          <Teachers
          teachers ={teachers}
          setTeachers ={setTeachers}/>
         </Route>
         <Route path="/addteacher">
          <AddTeacher
          teachers ={teachers}
          setTeachers ={setTeachers}/>
         </Route>
         <Route path="/edit_teacher/:id/">
          <UpdateTeacher
          teachers ={teachers}
          setTeachers ={setTeachers}/>
         </Route>
         <Route path="**">
          <NoPage/>
         </Route>
      </Switch>
    </div>
  ); 
}

export default App;
