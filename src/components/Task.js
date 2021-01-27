import {FaTimes} from "react-icons/fa";
import {FaRegLightbulb} from "react-icons/fa";
import {FaLightbulb} from "react-icons/fa";

const Task = ({task, onToggle, onDelete}) => {
    const onRemindOn = () => {
        alert('Reminder added!')
        return
    }

    const onRemindOff = () => {
        alert('Reminder removed!')
        return
    }

    return (
        <>
            <div className='task'>
                <h3>{task.text} <FaTimes style={{color: 'rgb(81, 28, 134)', cursor: 'pointer'}} onClick={() => onDelete(task.id) } /></h3>
                <p>
                    {task.date} {task.reminder ? <FaLightbulb className='reminder-bulb' style={{cursor: 'pointer'}} onClick={() => {onToggle(task.id); onRemindOff()}} /> : <FaRegLightbulb className='reminder-bulb' style={{cursor: 'pointer'}} onClick={() => {onToggle(task.id); onRemindOn() }} />}
                </p>
            </div>
        </>
    )
}

export default Task
