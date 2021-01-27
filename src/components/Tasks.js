import Task from './Task'

const Tasks = ({tasks, onToggle}) => {
    return (
        <>
            {tasks.map((task) => (
                <Task task={task} onToggle={onToggle} />
            ))}
        </>
    )
}

export default Tasks
