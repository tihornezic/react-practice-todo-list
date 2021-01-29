import {useState, useEffect} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5001/tasks')
    const data = response.json()

    return data
  }
 
  const toggleReminder = function (id) {
    setTasks(tasks.map((task) =>
      task.id === id ? {...task, reminder: !task.reminder} : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <div className='container'>
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder}
        onDelete={deleteTask} /> : <div className='no-to-do'>No Tasks To Do!</div>}
    </div>
  );
}

export default App;
