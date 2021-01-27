import {FaTimes} from "react-icons/fa";
import {FaRegLightbulb} from "react-icons/fa";
import {FaLightbulb} from "react-icons/fa";

const Task = ({task, onToggle}) => {
    return (
        <>
            <div className='task'>
                <h3>{task.text} <FaTimes style={{color: 'rgb(81, 28, 134)', cursor: 'pointer'}} /></h3>
                <p>
                    {task.date} {task.reminder ? <FaLightbulb className='reminder-bulb' style={{cursor: 'pointer'}} onClick={() => {onToggle(task.id)}} /> : <FaRegLightbulb className='reminder-bulb' style={{cursor: 'pointer'}} onClick={() => {onToggle(task.id)}} />}
                </p>
            </div>
        </>
    )
}

export default Task
