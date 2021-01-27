import Task from './Task'

const Tasks = ({tasks, onToggle, onDelete}) => {
    return (
        <>
            {tasks.map((task) =>
                <Task task={task} onToggle={onToggle} onDelete={onDelete} />
            )}
        </>
    )
}

export default Tasks
