
import { red } from 'jest-matcher-utils/node_modules/chalk'
import {FaTimes} from 'react-icons/fa'
const SoloTasks = ({task,remove}) => {
    return (
        <div className='task'>
        <h3>{task.text}<FaTimes style={{color:'red',cursor:'pointer'}}
         onClick={()=>remove(task.id)}/></h3>
        </div>
    )
}

export default SoloTasks
