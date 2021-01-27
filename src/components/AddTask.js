const AddTask = () => {
    return (
        <div>
            <form className='add-form'>
                <div className='form-control'>
                    <label>Task</label>
                    <input type="text" placeholder='Add Task'/>
                </div>
                <div className='form-control'>
                    <label>Day & Time</label>
                    <input type="text" placeholder='Add Task'/>
                </div>
                <div className='form-control form-control-check'>
                    <label>Set Reminder</label>
                    <input type="checkbox"/>
                </div>
                <button className='btn btn-block'>Save Task</button>
            </form>
        </div>
    )
}

export default AddTask
