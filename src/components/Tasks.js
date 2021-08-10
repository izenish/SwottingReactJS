import React from 'react'
import SoloTasks from './SoloTasks'

const Tasks = ({tasks,remove}) => {
   
    return (
        <>
        {tasks.map((task)=>(
            <SoloTasks key={task.id} task={task} remove={remove}/>
            ))}
        </>
    )
}

export default Tasks
