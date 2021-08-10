// import logo from './logo.svg';
// import './App.css';
// https://flatuicolors.com/palette/defo for UI colors.
import { useState } from 'react'
import Header from './components/Headers'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks'
function App() {
  const [showAddTask,setShowAddTask]=useState(true)
  const [tasks,setTasks]=useState([
    {
        id:1,
        text:"Make Passport",
        day:"ASAP",
        reminder:true,
    },
    {
        id:2,
        text:"REACTJS",
        day:"ASAP",
        reminder:true,
    },
    {
        id:3,
        text:"Exercise",
        day:"ASAP",
        reminder:true,
    }
])
// Add task
const addTasks=(task)=>{
  console.log(task)
  const id=Math.floor(Math.random()*10000)+1
  const newTask={id,...task}
  setTasks([...tasks,newTask])
}

// Deleter
const remover=(id)=>{
  console.log('Deleted',id)
  setTasks(tasks.filter((task)=>task.id!==id))
}
// Double Tap Changer
const toggleReminder=(id)=>{
  console.log(id)
  setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
}
  return (
    <div className="container">
      <h1 style={{color:'#1abc9c',backgroundColor:'#34495e'}}>Hey I am a React APP</h1>
      <Header  title='Version 2' onAdd={()=>setShowAddTask(!showAddTask)}/>
      {showAddTask &&<AddTasks onAdd={addTasks}/>}
      {tasks.length>0?(<Tasks tasks={tasks} remove={remover} onToggle={toggleReminder}/>):("No due tasks")}
  
    </div>
  );
}

export default App;
 