import React from 'react'
import SoloTasks from './SoloTasks'

const Tasks = ({tasks,remove,onToggle}) => {
   
    return (
        <>
        {tasks.map((task)=>(
            <SoloTasks key={task.id} task={task} remove={remove} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Tasks
