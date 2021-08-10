// import logo from './logo.svg';
// import './App.css';
// https://flatuicolors.com/palette/defo for UI colors.
import { useState } from 'react'
import Header from './components/Headers'
import Tasks from './components/Tasks'
function App() {
  const [tasks,setTasks]=useState([
    {
        id:1,
        text:"Make Passport",
        day:"ASAP",
        remainder:true,
    },
    {
        id:2,
        text:"REACTJS",
        day:"ASAP",
        remainder:true,
    },
    {
        id:3,
        text:"Exercise",
        day:"ASAP",
        remainder:true,
    }
])
// Deleter
const remover=(id)=>{
  console.log('Deleted',id)
  setTasks(tasks.filter((task)=>task.id!==id))

}
  return (
    <div className="container">
      <h1 style={{color:'#1abc9c',backgroundColor:'#34495e'}}>Hey I am a React APP</h1>
      <Header  title='Version 2'/>
      {tasks.length>0?(<Tasks tasks={tasks} remove={remover} />):("No due tasks")}
  
    </div>
  );
}

export default App;
 